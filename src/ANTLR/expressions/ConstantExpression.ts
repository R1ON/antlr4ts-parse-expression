import { NameStringExpression } from './NameStringExpression';
import { EvaluateStringExp, EvaluateValueExp } from '../types';

// ---

export class ConstantExpression extends NameStringExpression {
  public value: number | string = 0;

  constructor(value: number | string) {
    super();

    this.value = value;
  }

  public evaluateString: EvaluateStringExp = () => {
    return this.convertEvaluatedValueToString(this.value);
  };

  public evaluateValue: EvaluateValueExp = () => {
    return this.value;
  };
}
