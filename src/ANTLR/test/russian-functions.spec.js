import { MatchNamesFormatterContext } from '../index';
import { ExpressionString } from '../utils/StringChunk';

// ---

describe('RussianFunctions', () => {
  const language = 'ru';
  const formatterContext = new MatchNamesFormatterContext();

  describe('plural function', () => {
    const positiveCases = [
      {
        value: '1',
        expected: 'гол',
      },
      {
        value: '1.5',
        expected: 'гола',
      },
      {
        value: '2',
        expected: 'гола',
      },
      {
        value: '4.5',
        expected: 'гола',
      },
      {
        value: '5',
        expected: 'голов',
      },
      {
        value: '11',
        expected: 'голов',
      },
      {
        value: '21',
        expected: 'гол',
      },
      {
        value: '21.5',
        expected: 'гол',
      },
      {
        value: '25',
        expected: 'голов',
      },
      {
        value: '31.5',
        expected: 'гол',
      },
      {
        value: '101',
        expected: 'гол',
      },
      {
        value: '101.5',
        expected: 'гол',
      },
      {
        value: '102',
        expected: 'гола',
      },
    ];

    test.each(positiveCases)(
      '%o',
      ({ value, expected }) => {
        const expressionString = new ExpressionString(`plural(${value}, ["гол", "гола", "голов"])`);
        const expressionValue = expressionString.writeTo(language, formatterContext, {});

        expect(expressionValue).toEqual(expected);
      },
    );
  });

  describe('numeralMaleEnding function', () => {
    const positiveCases = [
      {
        value: '1',
        expected: '1-ый',
      },
      {
        value: '2',
        expected: '2-ой',
      },
      {
        value: '3',
        expected: '3-ий',
      },
      {
        value: '22',
        expected: '22-ой',
      },
      {
        value: '140',
        expected: '140-ой',
      },
      {
        value: '150',
        expected: '150-ый',
      },
    ];

    test.each(positiveCases)(
      '%o',
      ({ value, expected }) => {
        const expressionString = new ExpressionString(`numeralMaleEnding(${value})`);
        const expressionValue = expressionString.writeTo(language, formatterContext, {});

        expect(expressionValue).toEqual(expected);
      },
    );
  });
});
