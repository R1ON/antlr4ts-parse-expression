import { NameStringExpression } from './NameStringExpression';
import { EvaluateStringExp, EvaluateValueExp } from '../types';

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
      throw new Error(`
        ComparatorExpression -> 'right' и 'left' должны быть одного типа.
        Left = ${left}. Typeof left = ${typeof left}.
        Right = ${right}. Typeof right = ${typeof right}.
      `);
    }

    const isCorrectStringOperation = this.operation === '==' || this.operation === '!=';

    if (typeof left === 'string' && typeof right === 'string' && !isCorrectStringOperation) {
      throw new Error(`
        ComparatorExpression -> нельзя использовать оператор ${this.operation} для сравнения строк.
        Замените строки на числа.
      `);
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
        throw new Error(`
          ComparatorExpression -> compareStrings -> некорректный оператор ${this.operation} при сравнении ${left} и ${right}.
        `);
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
      throw new Error(`
        ComparatorExpression -> не получится применить операцию ${this.operation}.
        Значения для 'left' и 'right' должны быть 0 или 1.
        Текущие значения: left = ${left}; right = ${right};
      `);
    }

    const leftIsTrue  = left === 1;
    const rightIsTrue = right === 1;

    switch (this.operation) {
      case '&&':
        return leftIsTrue && rightIsTrue ? 1 : 0;

      case '||':
        return leftIsTrue || rightIsTrue ? 1 : 0;

      default:
        throw new Error(`
          ComparatorExpression -> compareNumbers -> некорректный оператор ${this.operation} при сравнении ${left} и ${right}.
        `);
    }
  }
}
