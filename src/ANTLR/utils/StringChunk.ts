import { CharStreams, CommonTokenStream } from 'antlr4ts';

import { FunctionWithContext } from '../types';

import { NameStringExpressionVisitor } from './Visitor';

import { NameStringExpressionGrammarLexer } from '../src/NameStringExpressionGrammarLexer';
import { NameStringExpressionGrammarParser } from '../src/NameStringExpressionGrammarParser';

import { NameStringExpression } from '../expressions/NameStringExpression';
import { NamesFormatterContext } from '../formatters/NamesFormatterContext';

// ---

type WriteTo = FunctionWithContext<string>;

interface NameStringExpressionProps {
  writeTo: WriteTo;
}

// ---

export class StringChunk implements NameStringExpressionProps {
  constructor() {}

  public writeTo: WriteTo = () => {
    return '';
  };
}

export class RegularString extends StringChunk {
  public value = '';

  constructor(value: string) {
    super();

    this.value = value;
  }

  public writeTo: WriteTo = () => {
    return this.value;
  };
}

export class ExpressionString extends StringChunk {
  public expression = '';
  public Expression: NameStringExpression;

  constructor(expression: string) {
    super();

    this.expression = expression;

    const charStream = CharStreams.fromString(expression);
    const lexer = new NameStringExpressionGrammarLexer(charStream);
    const token = new CommonTokenStream(lexer);
    const parser = new NameStringExpressionGrammarParser(token);

    const tree = parser.expression();
    const visitor = new NameStringExpressionVisitor();

    this.Expression = visitor.visit(tree);
  }

  public writeTo: WriteTo = (
    formatterContext,
    parameters
  ) => {
    try {
      const result = this.Expression.evaluateString(formatterContext, parameters);

      if (typeof result !== 'string') {
        console.warn(`
          ExpressionString -> не получилось вычислить выражение ${this.expression}.
          Результат выражения = ${result}.
        `);

        return '';
      }

      if (ExpressionString.isNullOrWhitespace(result)) {
        return '';
      }

      return result;
    }
    catch (err) {
      console.error(err);
    }

    return '';
  };

  private static isNullOrWhitespace(input: string | null | undefined): boolean {
    return !input || !input.trim();
  }
}

export class ParensString extends StringChunk {
  public leadingSpace: string;
  public innerChunks: StringChunk[] = [];

  constructor(leadingSpace: string, nameString: StringChunk[]) {
    super();
    
    this.leadingSpace = leadingSpace;
    this.innerChunks = nameString;
  }

  public writeTo: WriteTo = (
    formatterContext,
    parameters,
  ) => {
    let innerString = `${this.leadingSpace}(`;
    
    for (const chunk of this.innerChunks) {
      const result = chunk.writeTo(formatterContext, parameters);

      if (chunk instanceof ExpressionString && result === '') {
        return '';
      }

      innerString += result;
    }

    innerString += ')';
    
    return innerString;
  };
}
