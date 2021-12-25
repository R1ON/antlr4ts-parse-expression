import { EvaluateStringExp, EvaluateValueExp } from '../types';
import { ANTLRError } from '../utils/Error';

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

  protected convertEvaluatedValueToString(value: unknown): string | null {
    switch (typeof value) {
      case 'number':
        return value.toString(10);

      case 'string':
        return value;

      default:
        throw new ANTLRError(
          'convertEvaluatedValueToString -> тип "valueTypeof" для значения "value" не поддерживается (только строка или число)',
          { value, valueTypeof: typeof value },
        );
    }
  }
}
