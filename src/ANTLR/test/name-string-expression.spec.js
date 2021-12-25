import { NamesFormatterContext } from '../formatters/NamesFormatterContext';
import { TestParser } from './TestParser';
import { ANTLRError } from '../utils/Error';
import { ExpressionString } from '../utils/StringChunk';

// ---

const LANGUAGE = { RU: 'ru', EN: 'en' };

describe('NameStringExpression', () => {
  const namesFormatterContext = new NamesFormatterContext();

  namesFormatterContext.addCommonFunctions({ empty, add });
  namesFormatterContext.addLocalizedFunctions({
    [LANGUAGE.RU]: { humanizeNumber: humanizeNumberRu, concat },
    [LANGUAGE.EN]: { humanizeNumber: humanizeNumberEn, concat },
  });
  namesFormatterContext.addEntities({
    object: {
      1: { name: { ru: 'объект 1', en: 'object 1' } },
      2: { name: { ru: 'объект 2', en: 'object 2' } },
    },
  });
  // namesFormatterContext.addEntities({
  //   league: {
  //     name: {
  //       ru: 'Имя чемпионата',
  //       en: 'League Name',
  //     },
  //   },
  // });

  const positiveCases = [
    // TODO: Парсер еще не умеет работать с такой записью (когда научится, нужно поправить тест).
    // EntityReferenceExpressionTestTODO
    // {
    //   lang: LANGUAGE.RU,
    //   value: 'League.Name',
    //   expected: 'Имя чемпионата',
    // },
    {
      lang: LANGUAGE.RU,
      value: '0.5',
      expected: '0.5',
    },
    {
      lang: LANGUAGE.RU,
      value: '-0.5',
      expected: '-0.5',
    },
    {
      lang: LANGUAGE.RU,
      value: '1.7e+3',
      expected: '1700',
    },
    {
      lang: LANGUAGE.RU,
      value: '1.7e-3',
      expected: '0.0017',
    },
    {
      lang: LANGUAGE.RU,
      value: '-1e-3',
      expected: '-0.001',
    },
    {
      lang: LANGUAGE.RU,
      value: '-1e+2',
      expected: '-100',
    },
    {
      lang: LANGUAGE.RU,
      value: '-11',
      expected: '-11',
    },
    {
      lang: LANGUAGE.RU,
      value: '1.7e-3',
      expected: '0.0017',
    },
    {
      lang: LANGUAGE.RU,
      value: '"some text"',
      expected: 'some text',
    },
    {
      lang: LANGUAGE.RU,
      value: '$some_param',
      some_param: 1.5,
      expected: '1.5',
    },
    {
      lang: LANGUAGE.RU,
      value: '-$param',
      param: 1.5,
      expected: '-1.5',
    },
    {
      lang: LANGUAGE.RU,
      value: 'Object[1].Name',
      expected: 'объект 1',
    },
    {
      lang: LANGUAGE.RU,
      value: 'Object[$team].Name',
      team: 2,
      expected: 'объект 2',
    },
    {
      lang: LANGUAGE.RU,
      value: 'empty()',
      expected: '',
    },
    {
      lang: LANGUAGE.RU,
      value: 'humanizeNumber(1)',
      expected: 'один',
    },
    {
      lang: LANGUAGE.RU,
      value: 'concat([object[$team].name, " - ", object[2].name])',
      team: 1,
      expected: 'объект 1 - объект 2',
    },
    {
      lang: LANGUAGE.RU,
      value: 'add(1, 2.5)',
      expected: '3.5',
    },
    {
      lang: LANGUAGE.RU,
      value: '1 + 2',
      expected: '3',
    },
    {
      lang: LANGUAGE.RU,
      value: '$some_param + $other_param',
      some_param: 1,
      other_param: 2,
      expected: '3',
    },
    {
      lang: LANGUAGE.RU,
      value: '$some_param + " hello"',
      some_param: 1,
      expected: '1 hello',
    },
    {
      lang: LANGUAGE.RU,
      value: '"hello " + $other_param',
      other_param: 2,
      expected: 'hello 2',
    },
    {
      lang: LANGUAGE.RU,
      value: '$some_param - $other_param',
      some_param: 3,
      other_param: 2,
      expected: '1',
    },
    {
      lang: LANGUAGE.RU,
      value: '$some_param * $other_param',
      some_param: 3,
      other_param: 2,
      expected: '6',
    },
    {
      lang: LANGUAGE.RU,
      value: '$some_param / $other_param',
      some_param: 34,
      other_param: 2,
      expected: '17',
    },
    {
      lang: LANGUAGE.EN,
      value: 'humanizeNumber(2)',
      expected: 'two',
    },
    {
      lang: 'unknown_lang',
      value: 'empty()',
      expected: '',
    },
  ];

  test.each(positiveCases)(
    'Positive case: %o',
    ({ lang, value, expected, ...params }) => {
      const expressionString = new ExpressionString(value);
      const expressionValue = expressionString.writeTo(lang, namesFormatterContext, params);

      expect(expressionValue).toEqual(expected);
    },
  );

  const negativeCases = [
    // TODO: Парсер еще не умеет работать с такой записью (когда научится, нужно поправить тест).
    // EntityReferenceExpressionTestTODO
    // {
    //   lang: LANGUAGE.RU,
    //   value: 'League.BadName',
    // },
    {
      lang: LANGUAGE.RU,
      value: 'NonExistentEntity.Name',
    },
    {
      lang: LANGUAGE.RU,
      value: '$non_existent_param',
      param: 1.5,
    },
    {
      lang: 'unknown_language',
      value: 'Object[1].Name',
    },
    {
      lang: LANGUAGE.RU,
      value: 'non_existent_func()',
    },
    {
      lang: 'unknown_language',
      value: 'humanize_number(1)',
    },
    {
      lang: LANGUAGE.RU,
      value: '[1,2,3]',
    },
  ];

  const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});

  test.each(negativeCases)(
    'Negative case: %o',
    ({ value, lang, ...params }) => {
      let parserError = null;
      const parser = new TestParser(value);

      try {
        parser.getValue(lang, namesFormatterContext, params);
      }
      catch (error) {
        parserError = error;
      }

      expect(parserError).toBeInstanceOf(ANTLRError);

      if (parserError === null) {
        throw new Error('NameStringExpression -> Negative tests -> "parserError" не дожен быть null');
      }

      const expressionString = new ExpressionString(value);
      expressionString.writeTo(lang, namesFormatterContext, params);

      expect(consoleError).toHaveBeenCalledWith(parserError.message, parserError.props);
    },
  );

  const parserErrorCases = [
    '',
    '    ',
    '1,5',
    '-',
    '$',
    'Entity',
    'Entity[',
    'Entity[]',
    'Entity[1].',
    'func(',
    'func)',
    '[',
    '"',
    '\'',
  ];

  test.each(parserErrorCases)(
    'Parser error case: %o',
    (value) => {
      let parserError;

      try {
        new TestParser(value);
      }
      catch (err) {
        parserError = err;
      }

      expect(parserError).toBeInstanceOf(ANTLRError);
    },
  );
});

// ---

function empty() {
  return '';
}

function humanizeNumberEn(expressions, language, formatterContext, parameters) {
  const expressionResult = expressions[0].evaluateString(language, formatterContext, parameters);

  switch (parseFloat(expressionResult)) {
    case 1:
      return 'one';
    case 2:
      return 'two';
    default:
      return 'unknown number';
  }
}

function humanizeNumberRu(expressions, language, formatterContext, parameters) {
  const expressionResult = expressions[0].evaluateString(language, formatterContext, parameters);

  switch (parseFloat(expressionResult)) {
    case 1:
      return 'один';
    case 2:
      return 'два';
    default:
      return 'неизвестное число';
  }
}

function concat(expressions, language, formatterContext, parameters) {
  const expressionResult = expressions[0].evaluateValue(language, formatterContext, parameters);

  if (!Array.isArray(expressionResult)) {
    throw new ANTLRError('concat -> "expressionResult" должен быть массивом', { expressionResult });
  }

  return expressionResult.join('');
}

function add(expressions, language, formatterContext, parameters) {
  const x = expressions[0].evaluateString(language, formatterContext, parameters);
  const y = expressions[1].evaluateString(language, formatterContext, parameters);

  const result = parseFloat(x) + parseFloat(y);

  return result.toString();
}
