import { TestParser } from './TestParser';
import { MatchNamesFormatterContext, ANTLRError } from '../index';
import { ExpressionString } from '../utils/StringChunk';

// ---

describe('NegateExpressionTests', () => {
  const language = 'ru';
  const formatterContext = new MatchNamesFormatterContext();
  const positiveCases = [
    {
      value: '!1',
      expected: '0',
    },
    {
      value: '!0',
      expected: '1',
    },
  ];

  test.each(positiveCases)(
    'Positive case: %o',
    ({ value, expected }) => {
      const expressionString = new ExpressionString(value);
      const expressionValue = expressionString.writeTo(language, formatterContext, {});

      expect(expressionValue).toEqual(expected);
    },
  );

  const negativeCases = [
    ['!1.1'],
    ['!-1.1'],
    ['!"a"'],
  ];

  const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});

  test.each(negativeCases)(
    'Negative case: %s',
    (testCase) => {
      const parser = new TestParser(testCase);
      let parserError = null;

      try {
        parser.getValue(language, formatterContext, {});
      }
      catch (error) {
        parserError = error;
      }

      expect(parserError).toBeInstanceOf(ANTLRError);

      if (parserError === null) {
        throw new Error('ComparisonExpressionTest -> Negative tests -> "parserError" Не дожен быть null');
      }

      const expressionString = new ExpressionString(testCase);
      expressionString.writeTo(language, formatterContext, {});

      expect(consoleError).toHaveBeenCalledWith(parserError.message, parserError.props);
    },
  );
});
