import { NameStringExpression } from './NameStringExpression';

export class NegateExpression extends NameStringExpression {
  public expression: NameStringExpression;

  constructor(expression: NameStringExpression) {
    super();

    this.expression = expression;
  }

  public evaluateString() {
    return this.evaluateValue().toString();
  }

  public evaluateValue() {
    const expression = this.expression.evaluateValue();

    if (typeof expression !== 'number') {
      throw new Error(`
        NegateExpression -> не получится применить операцию Отрицание. Потому что 'expression' должен быть числом.
        Expression = ${expression}.
        Typeof expression = ${typeof expression}.
      `);
    }

    switch (expression) {
      case 1:
        return 0;

      case 0:
        return 1;

      default:
        throw new Error(`
          NegateExpression -> 'expression' должен быть 1 или 0.
          Expression = ${expression}.
        `);
    }
  }
}
