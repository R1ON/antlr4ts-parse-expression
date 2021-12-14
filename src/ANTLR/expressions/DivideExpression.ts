import { NameStringExpression } from './NameStringExpression';
import { EvaluateStringExp, EvaluateValueExp } from '../types';

// ---

export class DivideExpression extends NameStringExpression {
  public left: NameStringExpression;
  public right: NameStringExpression;

  constructor(left: NameStringExpression, right: NameStringExpression) {
    super();

    this.left = left;
    this.right = right;
  }

  public evaluateString: EvaluateStringExp = (formatterContext, parameters) => {
    return this.evaluateValue(formatterContext, parameters).toString();
  };

  public evaluateValue: EvaluateValueExp = (formatterContext, parameters) => {
    const left = this.left.evaluateValue(formatterContext, parameters);
    const right = this.right.evaluateValue(formatterContext, parameters);

    if (typeof left === 'number' && typeof right === 'number') {
      return left / right;
    }

    if (typeof left === 'number' && typeof right === 'string') {
      const floatRight = parseFloat(right);

      if (Number.isNaN(floatRight)) {
        throw new Error(`
          DivideExpression -> 'right' не должен быть NaN.
          Right = ${floatRight}.
        `);
      }

      return left / floatRight;
    }

    if (typeof left === 'string' && typeof right === 'number') {
      const floatLeft = parseFloat(left);

      if (Number.isNaN(floatLeft)) {
        throw new Error(`
          DivideExpression -> 'left' не должен быть NaN.
          Left = ${floatLeft}.
        `);
      }

      return floatLeft / right;
    }

    throw new Error(`
      DivideExpression -> 'right' или 'left' не являются числом или строкой.
      Left = ${left}.
      Right = ${right}.
    `);
  };
}
