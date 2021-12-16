import { NameStringExpression } from './NameStringExpression';
import { EvaluateStringExp, EvaluateValueExp } from '../types';
import { ANTLRError } from '../utils/Error';

// ---

export class AddExpression extends NameStringExpression {
  public left: NameStringExpression;
  public right: NameStringExpression;

  constructor(left: NameStringExpression, right: NameStringExpression) {
    super();

    this.left = left;
    this.right = right;
  }

  public evaluateString: EvaluateStringExp = (formatterContext, parameters) => {
    return this.evaluateValue(formatterContext, parameters).toString();
  };

  public evaluateValue: EvaluateValueExp = (formatterContext, parameters) => {
    const left = this.left.evaluateValue(formatterContext, parameters);
    const right = this.right.evaluateValue(formatterContext, parameters);

    if (typeof left === 'number' && typeof right === 'number') {
      return left + right;
    }

    if (typeof left === 'string' && typeof right === 'number') {
      return left + right.toString();
    }

    if (typeof left === 'number' && typeof right === 'string') {
      return left.toString() + right;
    }

    throw ANTLRError.getErrorMessage(
      'AddExpression -> "right" или "left" не являются числом или строкой',
      { left, right },
    );
  };
}
