import { TestParser } from './TestParser';
import { MatchNamesFormatterContext, ANTLRError } from '../index';
import { ExpressionString } from '../utils/StringChunk';

// ---

describe('ComparisonExpressionTests', () => {
  const language = 'ru';
  const formatterContext = new MatchNamesFormatterContext();
  const positiveCases = [
    {
      value: '1 == 1',
      expected: '1',
    },
    {
      value: '1 != 1',
      expected: '0',
    },
    {
      value: '1 != 2',
      expected: '1',
    },
    {
      value: '1 > 0',
      expected: '1',
    },
    {
      value: '1 > 1',
      expected: '0',
    },
    {
      value: '1 > 2',
      expected: '0',
    },
    {
      value: '1 >= 0',
      expected: '1',
    },
    {
      value: '1 >= 1',
      expected: '1',
    },
    {
      value: '1 >= 2',
      expected: '0',
    },
    {
      value: '1 && 0',
      expected: '0',
    },
    {
      value: '1 && 1',
      expected: '1',
    },
    {
      value: '1 || 0',
      expected: '1',
    },
    {
      value: '0 || 0',
      expected: '0',
    },
    {
      value: '"1" == "1"',
      expected: '1',
    },
    {
      value: '"1" == "2"',
      expected: '0',
    },
    {
      value: '"1" != "1"',
      expected: '0',
    },
    {
      value: '"1" != "2"',
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
    ['"1" == 1'],
    ['"1" != 1'],
    ['"1" > 1'],
    ['"1" >= 1'],
    ['"1" < 1'],
    ['"1" <= 1'],
    ['"1" && 1'],
    ['"1" || 1'],
    ['1.1 && 1'],
    ['1.1 || 1'],
    ['"1" && "1"'],
    ['"1" || "1"'],
    ['"1" > "1"'],
    ['"1" >= "1"'],
    ['"1" < "1"'],
    ['"1" <= "1"'],
    ['-2 && 2'],
    ['-2 || 2'],
  ];

  const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});

  test.each(negativeCases)(
    'Negative case: %s',
    (testCase) => {
      let parserError = null;
      const parser = new TestParser(testCase);

      try {
        parser.getValue(language, formatterContext, {});
      }
      catch (error) {
        parserError = error;
      }

      expect(parserError).toBeInstanceOf(ANTLRError);

      if (parserError === null) {
        throw new Error('ComparisonExpressionTest -> Negative tests -> "parserError" не дожен быть null');
      }

      const expressionString = new ExpressionString(testCase);
      expressionString.writeTo(language, formatterContext, {});

      expect(consoleError).toHaveBeenCalledWith(parserError.message, parserError.props);
    },
  );
});
