import { StringChunk, RegularString, ExpressionString, ParensString } from './utils/StringChunk';
import { NameString } from './utils/NameString';
import { ANTLRError } from './utils/Error';

export class NameStringParser {
  public static Parse(nameString: string): NameString {
    let startPosition           = 0;
    let position                = 0;
    let spacesCount             = 0;
    let expressionStartPosition = 0;

    let inExpression = false;
    let currentContext = new ParensContext();
    const stack: ParensContext[] = [];

    while (position < nameString.length) {
      const char = nameString[position];

      if (!inExpression) {
        switch (char) {
          case '(':
            putString(true);
            enterParens();
            continue;

          case ')':
            putString(false);
            exitParens();
            continue;

          case '{':
            putString(false);
            enterExpression();

            continue;
        }

        spacesCount = char === ' ' ? (spacesCount + 1) : 0;
      }

      if (char === '}') {
        if (!inExpression) {
          throw new ANTLRError(
            'NameStringParser -> была найден символ "}", но не найден "{"',
            { position },
          );
        }

        exitExpression();
        continue;
      }

      position++;
    }

    if (inExpression) {
      throw new ANTLRError(
        'NameStringParser -> выражение не закрыто',
        { expressionStartPosition },
      );
    }

    if (stack.length > 0) {
      const errorPosition = currentContext.startPosition;

      throw new ANTLRError(
        'NameStringParser -> выражение не закрыто',
        { errorPosition },
      );
    }

    putString(false);

    return new NameString(currentContext.nameStrings);

    // ---

    function putString(cutSpaces: boolean) {
      let length = position - startPosition;

      if (cutSpaces) {
        length -= spacesCount;
      }
      else {
        spacesCount = 0;
      }

      if (length === 0) {
        return;
      }

      const str = nameString.substring(startPosition, startPosition + length);
      currentContext.nameStrings.push(new RegularString(str));

      startPosition += length;
    }

    function enterParens() {
      const length = position - startPosition;
      const spaces = nameString.substring(startPosition, startPosition + length);

      stack.push(currentContext);

      const newParensContext = new ParensContext();
      newParensContext.startPosition = position;
      newParensContext.spaces = spaces;

      currentContext = newParensContext;

      position++;
      startPosition = position;
      spacesCount = 0;
    }

    function exitParens() {
      if (stack.length === 0) {
        throw new ANTLRError('NameStringParser -> не найден символ "("');
      }

      position++;
      startPosition = position;
      spacesCount = 0;

      const parensString = new ParensString(currentContext.spaces, currentContext.nameStrings);

      const context = stack.pop();

      if (context !== undefined) {
        currentContext = context;
      }

      currentContext.nameStrings.push(parensString);
    }

    function enterExpression() {
      inExpression = true;
      expressionStartPosition = position;

      position++;
      startPosition = position;
      spacesCount = 0;
    }

    function exitExpression() {
      const length = position - startPosition;

      const str = nameString.substring(startPosition, startPosition + length);
      currentContext.nameStrings.push(new ExpressionString(str));

      inExpression = false;
      position++;

      expressionStartPosition = 0;
      startPosition = position;
      spacesCount = 0;
    }
  }
}

class ParensContext {
  public nameStrings: StringChunk[] = [];
  public startPosition = 0;
  public spaces = '';
}
