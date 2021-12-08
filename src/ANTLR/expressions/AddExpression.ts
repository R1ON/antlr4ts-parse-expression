import { NameStringExpression } from './NameStringExpression';

export class AddExpression extends NameStringExpression {
  public left: NameStringExpression;
  public right: NameStringExpression;

  constructor(left: NameStringExpression, right: NameStringExpression) {
    super();

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
      return left + right;
    }

    if (typeof left === 'string' && typeof right === 'number') {
      return left + right.toString();
    }

    if (typeof left === 'number' && typeof right === 'string') {
      return left.toString() + right;
    }

    throw new Error(`
      AddExpression -> 'right' или 'left' не являются числом или строкой.
      Left = ${left}.
      Right = ${right}.
    `);
  }
}
