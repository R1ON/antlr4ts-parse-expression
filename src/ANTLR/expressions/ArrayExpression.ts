import { NameStringExpression } from './NameStringExpression';
import { EvaluateStringExp, EvaluateValueExp } from '../types';

// ---

export class ArrayExpression extends NameStringExpression {
  public values: NameStringExpression[];

  constructor(values: NameStringExpression[]) {
    super();

    this.values = values;
  }

  public evaluateString: EvaluateStringExp = () => {
    throw new Error('ArrayExpression -> нельяза преобразовать массив к строке.');
  };

  public evaluateValue: EvaluateValueExp = (formatterContext, parameters) => {
    return this.values.map((value) => (
      value.evaluateValue(formatterContext, parameters)
    )).flat();
  };
}
