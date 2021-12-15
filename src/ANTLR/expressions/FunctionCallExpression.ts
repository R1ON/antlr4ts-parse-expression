import { NameStringExpression } from './NameStringExpression';
import { EvaluateStringExp, EvaluateValueExp } from '../types';

// ---

export class FunctionCallExpression extends NameStringExpression {
  public functionName: string;
  public params: NameStringExpression[];

  constructor(name: string, params: NameStringExpression[]) {
    super();

    this.functionName = name;
    this.params = params;
  }

  public evaluateString: EvaluateStringExp = (formatterContext, parameters) => {
    const func = formatterContext.tryGetFunction(this.functionName);

    if (!func) {
      throw new Error(`FunctionCallExpression -> функция ${this.functionName} не найдена.`);
    }

    return func(this.params, formatterContext, parameters);
  };

  public evaluateValue: EvaluateValueExp = (formatterContext, parameters) => {
    return this.evaluateString(formatterContext, parameters);
  };
}
