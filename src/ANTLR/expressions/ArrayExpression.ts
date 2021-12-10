import { NameStringExpression } from './NameStringExpression';

export class ArrayExpression extends NameStringExpression {
  public values: NameStringExpression[];

  constructor(values: NameStringExpression[]) {
    super();

    this.values = values;
  }

  public evaluateString() {
    throw new Error('ArrayExpression -> нельяза преобразовать массив к строке.');
  }

  public evaluateValue() {
    return this.values.map((value) => value.evaluateValue()).flat();
  }
}
