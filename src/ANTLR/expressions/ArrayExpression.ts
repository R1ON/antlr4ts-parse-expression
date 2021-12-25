import { NameStringExpression } from './NameStringExpression';
import { EvaluateStringExp, EvaluateValueExp } from '../types';
import { ANTLRError } from '../utils/Error';

// ---

export class ArrayExpression extends NameStringExpression {
  public values: NameStringExpression[];

  constructor(values: NameStringExpression[]) {
    super();

    this.values = values;
  }

  public evaluateString: EvaluateStringExp = () => {
    throw new ANTLRError('ArrayExpression -> нельяза преобразовать массив к строке');
  };

  public evaluateValue: EvaluateValueExp = (language, formatterContext, parameters) => {
    return this.values.map((value) => (
      value.evaluateValue(language, formatterContext, parameters)
    )).flat();
  };
}
