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

  public evaluateString: EvaluateStringExp = (_language, _formatterContext, parameters) => {
    if (this.parameterName in parameters) {
      return this.convertEvaluatedValueToString(parameters[this.parameterName]);
    }

    throw new ANTLRError(
      'ParameterReferenceExpression -> параметр не найден',
      { parameterName: this.parameterName },
    );
  };

  public evaluateValue: EvaluateValueExp = (_language, _formatterContext, parameters) => {
    if (this.parameterName in parameters) {
      const value = parameters[this.parameterName];

      switch (typeof value) {
        case 'number':
        case 'string':
          return value;

        default:
          throw new ANTLRError(
            'ParameterReferenceExpression -> тип "valueTypeof" не поддерживается (только строка или число)',
            { value, valueTypeof: typeof value },
          );
      }
    }

    throw new ANTLRError(
      'ParameterReferenceExpression -> параметр не найден',
      { parameterName: this.parameterName },
    );
  };
}
