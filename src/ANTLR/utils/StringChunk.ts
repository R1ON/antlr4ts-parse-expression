import { CharStreams, CommonTokenStream } from 'antlr4ts';

import { NameStringExpression } from '../expressions/NameStringExpression';
import { NameStringExpressionGrammarLexer } from '../src/NameStringExpressionGrammarLexer';
import { NameStringExpressionGrammarParser } from '../src/NameStringExpressionGrammarParser';

import { NameStringExpressionVisitor } from './Visitor';

// ---

type WriteToReturnType = string;

interface NameStringExpressionProps {
  writeTo: () => WriteToReturnType;
}

// ---

export class StringChunk implements NameStringExpressionProps {
  constructor() {}

  public writeTo(): WriteToReturnType {
    return '';
  }
}

export class RegularString extends StringChunk {
  public value = '';

  constructor(value: string) {
    super();

    this.value = value;
  }

  public writeTo(): WriteToReturnType {
    return this.value;
  }
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

  public writeTo(): WriteToReturnType {
    try {
      const result = this.Expression.evaluateString();

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
  }

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

  public writeTo(): WriteToReturnType {
    let innerString = `${this.leadingSpace}(`;
    
    for (const chunk of this.innerChunks) {
      if (chunk instanceof ExpressionString) {
        const result = chunk.writeTo();

        if (result === '') {
          return '';
        }

        innerString += result;
      }
      else {
        innerString += chunk.writeTo();
      }
    }

    innerString += ')';
    
    return innerString;
  }
}
