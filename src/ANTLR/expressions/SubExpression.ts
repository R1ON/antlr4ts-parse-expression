import { NameStringExpression } from './NameStringExpression';

export class SubExpression extends NameStringExpression {
  public left: NameStringExpression;
  public right: NameStringExpression;

  constructor(left: NameStringExpression, right: NameStringExpression) {
    super();

    if (
      !(left instanceof NameStringExpression || right instanceof NameStringExpression)
    ) {
      throw new Error(`
        SubExpression -> 'left' или 'right' не являются инстансами класса NameStringExpression
        Left = ${left}.
        Right = ${right}.
      `);
    }

    this.left = left;
    this.right = right;
  }

  public evaluateString() {
    return this.evaluateValue().toString();
  }

  public evaluateValue() {
    const left = this.left.evaluateValue();
    const right = this.right.evaluateValue();

    if (typeof left === 'number' && typeof right === 'number') {
      return left - right;
    }

    if (typeof left === 'number' && typeof right === 'string') {
      const floatRight = parseFloat(right);

      if (Number.isNaN(floatRight)) {
        throw new Error(`
          SubExpression -> 'right' не должен быть NaN.
          Right = ${floatRight}.
        `);
      }

      return left - floatRight;
    }

    if (typeof left === 'string' && typeof right === 'number') {
      const floatLeft = parseFloat(left);

      if (Number.isNaN(floatLeft)) {
        throw new Error(`
          SubExpression -> 'left' не должен быть NaN.
          Left = ${floatLeft}.
        `);
      }

      return floatLeft - right;
    }

    throw new Error(`
      SubExpression -> 'right' или 'left' не являются числом или строкой.
      Left = ${left}.
      Right = ${right}.
    `);
  }
}
