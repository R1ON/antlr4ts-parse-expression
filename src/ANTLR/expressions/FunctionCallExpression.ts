import { NameStringExpression } from './NameStringExpression';
import { EvaluateStringExp, EvaluateValueExp } from '../types';
import { ANTLRError } from '../utils/Error';

// ---

export class FunctionCallExpression extends NameStringExpression {
  public functionName: string;
  public params: NameStringExpression[];

  constructor(name: string, params: NameStringExpression[]) {
    super();

    this.functionName = name;
    this.params = params;
  }

  public evaluateString: EvaluateStringExp = (language, formatterContext, parameters) => {
    const func = formatterContext.tryGetFunction(this.functionName, language);

    if (!func) {
      throw new ANTLRError(
        'FunctionCallExpression -> функция не найдена',
        { functionName: this.functionName },
      );
    }

    return func(this.params, language, formatterContext, parameters);
  };

  public evaluateValue: EvaluateValueExp = (language, formatterContext, parameters) => {
    return this.evaluateString(language, formatterContext, parameters);
  };
}
