import { NameStringExpression } from './NameStringExpression';
import { EvaluateStringExp, EvaluateValueExp } from '../types';
import { ANTLRError } from '../utils/Error';

// ---

type Operation = '==' | '>=' | '>' | '<=' | '<' | '!=' | '&&' | '||';

export class ComparatorExpression extends NameStringExpression {
  public left: NameStringExpression;
  public right: NameStringExpression;
  public operation: Operation;
  private TOLERANCE = 0.00000000001;

  constructor(left: NameStringExpression, right: NameStringExpression, op: Operation) {
    super();

    this.left = left;
    this.right = right;
    this.operation = op;
  }

  public evaluateString: EvaluateStringExp = (formatterContext, parameters) => {
    return this.evaluateValue(formatterContext, parameters).toString();
  };

  public evaluateValue: EvaluateValueExp = (formatterContext, parameters) => {
    const left = this.left.evaluateValue(formatterContext, parameters);
    const right = this.right.evaluateValue(formatterContext, parameters);

    if (
      (typeof left === 'string' && typeof right !== 'string') ||
      (typeof left !== 'string' && typeof right === 'string')
    ) {
      throw ANTLRError.getErrorMessage(
        'ComparatorExpression -> "right" и "left" должны быть одного типа',
        { left, leftTypeof: typeof left, right, rightTypeof: typeof right },
      );
    }

    const isCorrectStringOperation = this.operation === '==' || this.operation === '!=';

    if (typeof left === 'string' && typeof right === 'string' && !isCorrectStringOperation) {
      throw ANTLRError.getErrorMessage(
        'ComparatorExpression -> нельзя использовать operator для сравнения строк (замените строки на числа)',
        { operator: this.operation },
      );
    }

    return typeof left === 'string'
      ? this.compareStrings(left, right)
      : this.compareNumbers(left, right);
  };

  private compareStrings(left, right) {
    switch (this.operation) {
      case '==':
        return left === right ? 1 : 0;

      case '!=':
        return left !== right ? 1 : 0;

      default:
        throw ANTLRError.getErrorMessage(
          `ComparatorExpression -> compareStrings -> некорректный "operator" при сравнении "left" и "right"`,
          { left, right, operator: this.operation },
        );
    }
  }

  private compareNumbers(left, right) {
    switch (this.operation) {
      case '>':
        return left > right ? 1 : 0;

      case '>=':
        return left >= right ? 1 : 0;

      case '<':
        return left < right ? 1 : 0;

      case '<=':
        return left <= right ? 1 : 0;

      case '==':
        return Math.abs(left - right) < this.TOLERANCE ? 1 : 0;

      case '!=':
        return Math.abs(left - right) > this.TOLERANCE ? 1 : 0;
    }

    if (
      !(left === 0 || left === 1) ||
      !(right === 0 || right === 1)
    ) {
      throw ANTLRError.getErrorMessage(
        'ComparatorExpression -> не получится применить "operator". Значения для "left" и "right" должны быть 0 или 1',
        { left, right, operator: this.operation },
      );
    }

    const leftIsTrue  = left === 1;
    const rightIsTrue = right === 1;

    switch (this.operation) {
      case '&&':
        return leftIsTrue && rightIsTrue ? 1 : 0;

      case '||':
        return leftIsTrue || rightIsTrue ? 1 : 0;

      default:
        throw ANTLRError.getErrorMessage(
          'ComparatorExpression -> compareNumbers -> некорректный "operator" для "left" и "right"',
          { left, right, operator: this.operation },
        );
    }
  }
}
