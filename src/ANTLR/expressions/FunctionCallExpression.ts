import { NameStringExpression } from './NameStringExpression';

export class FunctionCallExpression extends NameStringExpression {
  public functionName: string;
  public params: NameStringExpression[];

  constructor(name: string, params: NameStringExpression[]) {
    super();

    this.functionName = name;
    this.params = params;
  }

  public evaluateString() {
    // TODO: тут нужно достать функцию из контекста, если она есть, то вызвать, если нет, то выкинуть ошибку
    // return this.evaluateValue().toString();
    return null;
  }

  public evaluateValue() {
    return this.evaluateString();

    // throw new Error(`
    //   AddExpression -> 'right' или 'left' не являются числом или строкой.
    //   Left = ${left}.
    //   Right = ${right}.
    // `);
  }
}
