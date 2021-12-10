type EvaluateStringReturnType = string | null | void;

type EvaluateValue = string | number | null;
type EvaluateValueReturnType = EvaluateValue | EvaluateValue[];

interface NameStringExpressionProps {
  evaluateString: () => EvaluateStringReturnType;
  evaluateValue: () => EvaluateValueReturnType;
}

export class NameStringExpression implements NameStringExpressionProps {
  constructor() {}

  public evaluateString(): EvaluateStringReturnType {
    return null;
  }

  public evaluateValue(): EvaluateValueReturnType {
    return null;
  }
}
