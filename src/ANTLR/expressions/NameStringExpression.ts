import { EvaluateStringExp, EvaluateValueExp } from '../types';

// ---

interface NameStringExpressionProps {
  evaluateString: EvaluateStringExp;
  evaluateValue: EvaluateValueExp;
}

export class NameStringExpression implements NameStringExpressionProps {
  public evaluateString: EvaluateStringExp = () => {
    return null;
  };

  public evaluateValue: EvaluateValueExp = () => {
    return null;
  };
}
