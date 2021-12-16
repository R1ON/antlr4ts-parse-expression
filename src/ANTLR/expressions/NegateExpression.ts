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

  public evaluateString: EvaluateStringExp = (formatterContext, parameters) => {
    return this.evaluateValue(formatterContext, parameters).toString();
  };

  public evaluateValue: EvaluateValueExp = (formatterContext, parameters) => {
    const expression = this.expression.evaluateValue(formatterContext, parameters);

    if (typeof expression !== 'number') {
      throw ANTLRError.getErrorMessage(
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
        throw ANTLRError.getErrorMessage(
          'NegateExpression -> "expression" должен быть 1 или 0',
          { expression },
        );
    }
  };
}
