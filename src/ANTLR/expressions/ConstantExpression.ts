import { NameStringExpression } from './NameStringExpression';
import { EvaluateStringExp, EvaluateValueExp } from '../types';
import { ANTLRError } from '../utils/Error';

// ---

export class ConstantExpression extends NameStringExpression {
  public value: number | string = 0;

  constructor(value: number | string) {
    super();

    if (value === undefined || value === null) {
      throw ANTLRError.getErrorMessage(
        'ConstantExpression -> "value" должно быть строкой или числом',
        { value, valueTypeof: typeof value },
      );
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
