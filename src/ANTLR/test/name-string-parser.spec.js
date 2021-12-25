import { NameStringParser, MatchNamesFormatterContext, ANTLRError } from '../index';

describe('NameStringParser', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  const language = 'ru';
  const formatterContext = new MatchNamesFormatterContext();
  const positiveCases = [
    {
      value: '',
      expected: '',
    },
    {
      value: 'simple string  ',
      expected: 'simple string  ',
    },
    {
      value: 'simple string    (parens string)',
      expected: 'simple string    (parens string)',
    },
    {
      value: 'val = {123}',
      expected: 'val = 123',
    },
    {
      value: 'simple string    (parens string (nested parens string) trailing string)',
      expected: 'simple string    (parens string (nested parens string) trailing string)',
    },
    {
      value: 'simple string   () another string',
      expected: 'simple string   () another string',
    },
    {
      value: 'simple string      ((nested string)) another string',
      expected: 'simple string      ((nested string)) another string',
    },
    {
      value: 'simple string   (val = {""} some text) another string',
      expected: 'simple string another string',
    },
    {
      value: 'simple string   (val = {1.5} some text) another string',
      expected: 'simple string   (val = 1.5 some text) another string',
    },
    {
      value: 'simple string       (val1 = {1.5} val2 = {""})  another string',
      expected: 'simple string  another string',
    },
    {
      value: 'simple string       (val1 = {1.5})       (val2 = {"   "}) another string',
      expected: 'simple string       (val1 = 1.5) another string',
    },
    {
      value: 'simple string       (val1 = {""})       (val2 = {"123"}) another string',
      expected: 'simple string       (val2 = 123) another string',
    },
    {
      value: 'simple string       (val1 = {$error}) another string',
      expected: 'simple string another string',
    },
  ];

  test.each(positiveCases)(
    'Positive case: %o',
    ({ value, expected }) => {
      const expressionValue = NameStringParser.Parse(value).format(language, formatterContext, {});
      expect(expressionValue).toEqual(expected);
    },
  );

  const negativeCases = [
    ['string (another string'],
    ['string ) another string'],
    ['string (leading string (inner) trailing'],
    ['string {func()'],
    ['string } trailing'],
  ];

  test.each(negativeCases)(
    'Negative case: %s',
    (testCase) => {
      let err = null;

      try {
        NameStringParser.Parse(testCase);
      }
      catch (error) {
        err = error;
      }

      expect(err).toBeInstanceOf(ANTLRError);
    },
  );
});
