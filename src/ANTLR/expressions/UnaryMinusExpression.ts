import { NameStringExpression } from './NameStringExpression';
import { EvaluateStringExp, EvaluateValueExp } from '../types';
import { ANTLRError } from '../utils/Error';

// ---

export class UnaryMinusExpression extends NameStringExpression {
  public innerExpression: NameStringExpression;

  constructor(innerExpression: NameStringExpression) {
    super();

    this.innerExpression = innerExpression;
  }

  public evaluateString: EvaluateStringExp = (language, formatterContext, parameters) => {
    const value = this.evaluateValue(language, formatterContext, parameters);

    return this.convertEvaluatedValueToString(value);
  };

  public evaluateValue: EvaluateValueExp = (language, formatterContext, parameters) => {
    const argValue = this.innerExpression.evaluateValue(language, formatterContext, parameters);

    if (typeof argValue === 'number') {
      return -argValue;
    }

    if (typeof argValue === 'string') {
      const floatArgument = parseFloat(argValue);

      if (Number.isNaN(floatArgument)) {
        throw new ANTLRError(
          'UnaryMinusExpression -> не получилось конвертировать "argValue" в число.',
          { argValue, argValueTypeof: typeof argValue },
        );
      }

      return -floatArgument;
    }

    throw new ANTLRError(
      'UnaryMinusExpression -> "argValue" должен быть строкой или числом',
      { argValue, argValueTypeof: typeof argValue },
    );
  };
}
