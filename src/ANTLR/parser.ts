import { CharStreams, CommonTokenStream } from 'antlr4ts';

import { NameStringExpression } from './expressions/NameStringExpression';
import { NameStringExpressionGrammarLexer } from './src/NameStringExpressionGrammarLexer';
import { NameStringExpressionGrammarParser } from './src/NameStringExpressionGrammarParser';

import { NameStringExpressionVisitor } from './Visitor';

// ---

function parseNameStringExpression(expression?: string | null): NameStringExpression {
  if (!expression) {
    throw new Error(`
        NameStringExpression -> 'expression' должен быть не пустой строкой.
        Expression = ${expression}.
        Typeof expression = ${typeof expression}.
      `);
  }

  const charStream = CharStreams.fromString(expression);
  const lexer = new NameStringExpressionGrammarLexer(charStream);
  const token = new CommonTokenStream(lexer);
  const parser = new NameStringExpressionGrammarParser(token);

  const tree = parser.expression();
  const visitor = new NameStringExpressionVisitor();

  return visitor.visit(tree);
}

export default parseNameStringExpression;
