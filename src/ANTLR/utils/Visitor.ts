import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { ANTLRError } from './Error';

import { NameStringExpressionGrammarVisitor } from '../bin/NameStringExpressionGrammarVisitor';
import {
  CompilationUnitContext,
  UnaryMinusContext,
  NumberContext,
  StringContext,
  ArrayContext,
  FunctionCallContext,
  EntityContext,
  ParameterReferenceContext,
  AddSubExpressionContext,
  MulDivExpressionContext,
  ParenExpressionContext,
  ComparatorExpressionContext,
  BinaryExpressionContext,
  NegateExpressionContext,
  NameStringExpressionGrammarParser,
} from '../bin/NameStringExpressionGrammarParser';

import { NameStringExpression } from '../expressions/NameStringExpression';
import { ConstantExpression } from '../expressions/ConstantExpression';
import { AddExpression } from '../expressions/AddExpression';
import { SubExpression } from '../expressions/SubExpression';
import { MultiplyExpression } from '../expressions/MultiplyExpression';
import { DivideExpression } from '../expressions/DivideExpression';
import { ModuloExpression } from '../expressions/ModuloExpression';
import { UnaryMinusExpression } from '../expressions/UnaryMinusExpression';
import { ComparatorExpression } from '../expressions/ComparatorExpression';
import { NegateExpression } from '../expressions/NegateExpression';
import { ArrayExpression } from '../expressions/ArrayExpression';
import { FunctionCallExpression } from '../expressions/FunctionCallExpression';
import { EntityReferenceExpression } from '../expressions/EntityReferenceExpression';
import { ParameterReferenceExpression } from '../expressions/ParameterReferenceExpression';

// ---

type VisitorProps = NameStringExpressionGrammarVisitor<NameStringExpression>;

export class NameStringExpressionVisitor
  extends AbstractParseTreeVisitor<NameStringExpression>
  implements VisitorProps {
  // ---
  protected defaultResult(): NameStringExpression {
    return new NameStringExpression();
  }

  visitCompilationUnit(ctx: CompilationUnitContext): NameStringExpression {
    return this.visit(ctx.expression());
  }

  visitUnaryMinus(ctx: UnaryMinusContext): NameStringExpression {
    const innerExpression = this.visit(ctx.valueArgument());

    return new UnaryMinusExpression(innerExpression);
  }

  visitNumber(ctx: NumberContext): NameStringExpression {
    return new ConstantExpression(parseFloat(ctx.text));
  }

  visitString(ctx: StringContext): NameStringExpression {
    const text = ctx.text.substring(1, ctx.text.length - 1);

    return new ConstantExpression(text);
  }

  visitArray(ctx: ArrayContext): NameStringExpression {
    const values: NameStringExpression[] = [];
    const expressions = ctx.expression();

    if (expressions && expressions.length > 0) {
      expressions.forEach((expression) => {
        values.push(this.visit(expression));
      });
    }

    return new ArrayExpression(values);
  }

  visitFunctionCall(ctx: FunctionCallContext): NameStringExpression {
    const name = ctx._name.text;

    if (name === undefined) {
      throw new ANTLRError(
        'NameStringExpressionVisitor -> visitFunctionCall -> "name" не найден',
        { name, context: ctx },
      );
    }

    const values: NameStringExpression[] = [];
    const argumentContexts = ctx._args?.expression();

    if (argumentContexts && argumentContexts.length > 0) {
      argumentContexts?.forEach((expression) => {
        values.push(this.visit(expression));
      });
    }

    return new FunctionCallExpression(name, values);
  }

  visitEntity(ctx: EntityContext): NameStringExpression {
    const name = ctx._name.text;

    if (name === undefined) {
      throw new ANTLRError(
        'NameStringExpressionVisitor -> visitEntity -> "name" не найден',
        { name, context: ctx },
      );
    }

    const entityKeyContext = ctx.valueArgument();

    let keyArgument: NameStringExpression | null = null;

    if (entityKeyContext !== undefined) {
      keyArgument = this.visit(entityKeyContext);
    }

    const path = ctx.propertyPath().IDENTIFIER()
      .map((path) => path.text);

    return new EntityReferenceExpression(name, keyArgument, path);
  }

  visitParameterReference(ctx: ParameterReferenceContext): NameStringExpression {
    const name = ctx._name.text;

    if (name === undefined) {
      throw new ANTLRError(
        'NameStringExpressionVisitor -> visitEntity -> "name" не найден',
        { name, context: ctx },
      );
    }

    return new ParameterReferenceExpression(name);
  }

  visitAddSubExpression(ctx: AddSubExpressionContext): NameStringExpression {
    const left = this.visit(ctx.getChild(0));
    const right = this.visit(ctx.getChild(ctx.childCount - 1));

    switch (ctx._op.type) {
      case NameStringExpressionGrammarParser.PLUS:
        return new AddExpression(left, right);

      case NameStringExpressionGrammarParser.MINUS:
        return new SubExpression(left, right);

      default:
        throw new ANTLRError(
          'NameStringExpressionVisitor -> visitAddSubExpression -> операция не является сложением или вычитанием.',
          { operation: ctx._op.text, operationType: ctx._op.type },
        );
    }
  }

  visitMulDivExpression(ctx: MulDivExpressionContext): NameStringExpression {
    const left = this.visit(ctx.getChild(0));
    const right = this.visit(ctx.getChild(ctx.childCount - 1));

    switch (ctx._op.type) {
      case NameStringExpressionGrammarParser.STAR:
        return new MultiplyExpression(left, right);

      case NameStringExpressionGrammarParser.DIV:
        return new DivideExpression(left, right);

      case NameStringExpressionGrammarParser.MODULO:
        return new ModuloExpression(left, right);

      default:
        throw new ANTLRError(
          'NameStringExpressionVisitor -> visitMulDivExpression -> операция не является умножением или делением.',
          { operation: ctx._op.text, operationType: ctx._op.type },
        );
    }
  }

  visitParenExpression(ctx: ParenExpressionContext): NameStringExpression {
    return this.visit(ctx.expression());
  }

  visitComparatorExpression(ctx: ComparatorExpressionContext): NameStringExpression {
    const left = this.visit(ctx.getChild(0));
    const right = this.visit(ctx.getChild(ctx.childCount - 1));

    switch (ctx._op.type) {
      case NameStringExpressionGrammarParser.EQ:
        return new ComparatorExpression(left, right, '==');

      case NameStringExpressionGrammarParser.GE:
        return new ComparatorExpression(left, right, '>=');

      case NameStringExpressionGrammarParser.GT:
        return new ComparatorExpression(left, right, '>');

      case NameStringExpressionGrammarParser.LE:
        return new ComparatorExpression(left, right, '<=');

      case NameStringExpressionGrammarParser.LT:
        return new ComparatorExpression(left, right, '<');

      case NameStringExpressionGrammarParser.NEQ:
        return new ComparatorExpression(left, right, '!=');

      default:
        throw new ANTLRError(
          'NameStringExpressionVisitor -> visitComparatorExpression -> неизвестная операция',
          { operation: ctx._op.text, operationType: ctx._op.type },
        );
    }
  }

  visitBinaryExpression(ctx: BinaryExpressionContext): NameStringExpression {
    const left = this.visit(ctx.getChild(0));
    const right = this.visit(ctx.getChild(ctx.childCount - 1));

    switch (ctx._op.type) {
      case NameStringExpressionGrammarParser.AND:
        return new ComparatorExpression(left, right, '&&');

      case NameStringExpressionGrammarParser.OR:
        return new ComparatorExpression(left, right, '||');

      default:
        throw new ANTLRError(
          'NameStringExpressionVisitor -> visitBinaryExpression -> неизвестная операция',
          { operation: ctx._op.text, operationType: ctx._op.type },
        );
    }
  }

  visitNegateExpression(ctx: NegateExpressionContext): NameStringExpression {
    const expression = this.visit(ctx.expression());

    return new NegateExpression(expression);
  }
}
