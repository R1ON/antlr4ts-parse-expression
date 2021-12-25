import { NameStringExpression } from './NameStringExpression';
import { EvaluateStringExp, EvaluateValueExp } from '../types';
import { ANTLRError } from '../utils/Error';

// ---

export class NegateExpression extends NameStringExpression {
  public expression: NameStringExpression;

  constructor(expression: NameStringExpression) {
    super();

    this.expression = expression;
  }

  public evaluateString: EvaluateStringExp = (language, formatterContext, parameters) => {
    const value = this.evaluateValue(language, formatterContext, parameters);

    return this.convertEvaluatedValueToString(value);
  };

  public evaluateValue: EvaluateValueExp = (language, formatterContext, parameters) => {
    const expression = this.expression.evaluateValue(language, formatterContext, parameters);

    if (typeof expression !== 'number') {
      throw new ANTLRError(
        'NegateExpression -> не получится применить операцию Отрицание ("expression" должен быть числом)',
        { expression, expressionTypeof: typeof expression },
      );
    }

    switch (expression) {
      case 1:
        return 0;

      case 0:
        return 1;

      default:
        throw new ANTLRError(
          'NegateExpression -> "expression" должен быть 1 или 0',
          { expression },
        );
    }
  };
}
