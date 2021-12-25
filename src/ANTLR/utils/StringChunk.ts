import { CharStreams, CommonTokenStream } from 'antlr4ts';

import { FunctionWithContext } from '../types';

import { NameStringExpressionVisitor } from './Visitor';

import { NameStringExpressionGrammarLexer } from '../bin/NameStringExpressionGrammarLexer';
import { NameStringExpressionGrammarParser } from '../bin/NameStringExpressionGrammarParser';

import { NameStringExpression } from '../expressions/NameStringExpression';
import { ANTLRError, ANTLRErrorListener } from './Error';

// ---

type WriteTo = FunctionWithContext<string>;

interface NameStringExpressionProps {
  writeTo: WriteTo;
}

// ---

export class StringChunk implements NameStringExpressionProps {
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
    const errorListener = new ANTLRErrorListener();

    const charStream = CharStreams.fromString(expression);
    const lexer = new NameStringExpressionGrammarLexer(charStream);
    lexer.removeErrorListeners();
    lexer.addErrorListener(errorListener);

    const token = new CommonTokenStream(lexer);
    const parser = new NameStringExpressionGrammarParser(token);
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);

    const tree = parser.compilationUnit();
    const visitor = new NameStringExpressionVisitor();

    this.Expression = visitor.visit(tree);
  }

  public writeTo: WriteTo = (
    language,
    formatterContext,
    parameters,
  ) => {
    try {
      const result = this.Expression.evaluateString(language, formatterContext, parameters);

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
      if (err instanceof ANTLRError) {
        console.error(err.message, err.props);
        console.error(err.stack);
      }
      else {
        console.error('err', err);
      }
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
    language,
    formatterContext,
    parameters,
  ) => {
    let innerString = `${this.leadingSpace}(`;

    for (const chunk of this.innerChunks) {
      const result = chunk.writeTo(language, formatterContext, parameters);

      if (chunk instanceof ExpressionString && result === '') {
        return '';
      }

      innerString += result;
    }

    innerString += ')';

    return innerString;
  };
}
