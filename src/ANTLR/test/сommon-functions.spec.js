import { MatchNamesFormatterContext } from '../index';
import { ExpressionString } from '../utils/StringChunk';

// ---

describe('CommonFunctions', () => {
  const language = 'ru';
  const formatterContext = new MatchNamesFormatterContext();

  describe('ceil function', () => {
    const positiveCases = [
      {
        value: '0',
        expected: '0',
      },
      {
        value: '1.5',
        expected: '2',
      },
      {
        value: '1',
        expected: '1',
      },
      {
        value: '-1.5',
        expected: '-1',
      },
      {
        value: '-1',
        expected: '-1',
      },
    ];

    test.each(positiveCases)(
      '%o',
      ({ value, expected }) => {
        const expressionString = new ExpressionString(`ceil(${value})`);
        const expressionValue = expressionString.writeTo(language, formatterContext, {});

        expect(expressionValue).toEqual(expected);
      },
    );
  });

  describe('signed function', () => {
    const positiveCases = [
      {
        value: '0',
        expected: '0',
      },
      {
        value: '1.5',
        expected: '+1.5',
      },
      {
        value: '1',
        expected: '+1',
      },
      {
        value: '-1.5',
        expected: '-1.5',
      },
      {
        value: '-1',
        expected: '-1',
      },
    ];

    test.each(positiveCases)(
      '%o',
      ({ value, expected }) => {
        const expressionString = new ExpressionString(`signed(${value})`);
        const expressionValue = expressionString.writeTo(language, formatterContext, {});

        expect(expressionValue).toEqual(expected);
      },
    );
  });

  describe('trunc function', () => {
    const positiveCases = [
      {
        value: '0',
        expected: '0',
      },
      {
        value: '1.5',
        expected: '1',
      },
      {
        value: '1',
        expected: '1',
      },
      {
        value: '-1.5',
        expected: '-1',
      },
      {
        value: '-1',
        expected: '-1',
      },
    ];

    test.each(positiveCases)(
      '%o',
      ({ value, expected }) => {
        const expressionString = new ExpressionString(`trunc(${value})`);
        const expressionValue = expressionString.writeTo(language, formatterContext, {});

        expect(expressionValue).toEqual(expected);
      },
    );
  });
});
