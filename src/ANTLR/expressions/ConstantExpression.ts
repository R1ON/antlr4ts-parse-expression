import { NameStringExpression } from './NameStringExpression';
import { EvaluateStringExp, EvaluateValueExp } from '../types';

// ---

export class ConstantExpression extends NameStringExpression {
  public value: number | string = 0;

  constructor(value: number | string) {
    super();

    if (value === undefined || value === null) {
      throw new Error(`
        ConstantExpression -> 'value' должно быть строкой или числом.
        Value = ${value}.
        Typeof value = ${typeof value}.
      `);
    }

    this.value = value;
  }

  public evaluateString: EvaluateStringExp = () => {
    return typeof this.value === 'string'
      ? this.value
      : this.value.toString(10);
  };

  public evaluateValue: EvaluateValueExp = () => {
    return this.value;
  };
}
