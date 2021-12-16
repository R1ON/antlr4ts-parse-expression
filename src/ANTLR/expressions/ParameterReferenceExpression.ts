import { NameStringExpression } from './NameStringExpression';
import { EvaluateStringExp, EvaluateValueExp } from '../types';
import { ANTLRError } from '../utils/Error';

// ---

export class ParameterReferenceExpression extends NameStringExpression {
  public parameterName: string;

  constructor(parameterName: string) {
    super();

    this.parameterName = parameterName;
  }

  public evaluateString: EvaluateStringExp = (_formatterContext, parameters) => {
    if (!(this.parameterName in parameters)) {
      throw ANTLRError.getErrorMessage(
        'ParameterReferenceExpression -> параметр не найден',
        { parameterName: this.parameterName },
      );
    }

    return parameters[this.parameterName].toString();
  };

  public evaluateValue: EvaluateValueExp = (_formatterContext, parameters) => {
    if (!(this.parameterName in parameters)) {
      throw ANTLRError.getErrorMessage(
        'ParameterReferenceExpression -> параметр не найден',
        { parameterName: this.parameterName },
      );
    }

    return parameters[this.parameterName];
  };
}