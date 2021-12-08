import { NameStringExpression } from './NameStringExpression';

export class UnaryMinusExpression extends NameStringExpression {
  public innerExpression: NameStringExpression;

  constructor(innerExpression: NameStringExpression) {
    super();

    this.innerExpression = innerExpression;
  }

  public evaluateString() {
    return this.evaluateValue().toString();
  }

  public evaluateValue() {
    const argumentValue = this.innerExpression.evaluateValue();

    if (typeof argumentValue === 'number') {
      return -argumentValue;
    }

    if (typeof argumentValue === 'string') {
      const floatArgument = parseFloat(argumentValue);

      if (Number.isNaN(floatArgument)) {
        throw new Error(`
          UnaryMinusExpression -> не получилось конвертировать 'argumentValue' в число. 
          ArgumentValue = ${argumentValue}.
          Typeof ArgumentValue = ${typeof argumentValue}.
        `);
      }

      return -floatArgument;
    }

    throw new Error(`
      UnaryMinusExpression -> 'argumentValue' должен быть строкой или числом
      ArgumentValue = ${argumentValue}.
      Typeof ArgumentValue = ${typeof argumentValue}.
    `);
  }
}
