import { NameStringExpression } from './NameStringExpression';
import { EvaluateStringExp, EvaluateValueExp } from '../types';

// ---

export class ParameterReferenceExpression extends NameStringExpression {
  public parameterName: string;

  constructor(parameterName: string) {
    super();

    this.parameterName = parameterName;
  }

  public evaluateString: EvaluateStringExp = (_formatterContext, parameters) => {
    if (!(this.parameterName in parameters)) {
      throw new Error(`ParameterReferenceExpression -> параметр ${this.parameterName} не найден.`);
    }

    return parameters[this.parameterName].toString();
  };

  public evaluateValue: EvaluateValueExp = (_formatterContext, parameters) => {
    if (!(this.parameterName in parameters)) {
      throw new Error(`ParameterReferenceExpression -> параметр ${this.parameterName} не найден.`);
    }

    return parameters[this.parameterName];
  };
}