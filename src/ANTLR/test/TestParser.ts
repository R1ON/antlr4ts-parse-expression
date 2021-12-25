import { EvaluateStringExp } from '../types';
import { ExpressionString } from '../utils/StringChunk';

// ---

export class TestParser extends ExpressionString {
  public getValue: EvaluateStringExp = (language, formatterContext, parameters) => {
    if (this.Expression === null) {
      return null;
    }

    return this.Expression.evaluateString(language, formatterContext, parameters);
  };
}
