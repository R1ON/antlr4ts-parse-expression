import { CommonFunction } from '../../types';
import { ANTLRError } from '../Error';

// ---
// --- Тут много магических цифр, чтобы понять, что они значат - смотри тесты.
// ---

export const plural: CommonFunction = (expressions, language, formatterContext, parameters) => {
  const countString = expressions[0].evaluateString(language, formatterContext, parameters);

  if (typeof countString !== 'string') {
    throw new ANTLRError(
      'Russian -> plural -> параметр "countString" должен быть строкой',
      { countString, countStringTypeof: typeof countString },
    );
  }

  const forms = expressions[1].evaluateValue(language, formatterContext, parameters);

  if (!Array.isArray(forms)) {
    throw new ANTLRError(
      'Russian -> plural -> "parameters" для функции "plural" должны быть переданы массивом',
      { parameters: forms },
    );
  }

  const floatCount = parseFloat(countString);
  const m10  = floatCount % 10;
  const m100 = floatCount % 100;

  let value;

  if ((m10 === 1 && m100 !== 11) || (m10 > 1 && m10 < 2 && floatCount >= 20)) {
    value = forms[0];
  }
  else if (m10 > 1 && m10 < 5 && (m100 < 10 || m100 >= 20)) {
    value = forms[1];
  }
  else {
    value = forms[2];
  }

  if (value === null) {
    return '';
  }

  return value.toString();
};

// ---

export const numeralFemaleEnding: CommonFunction = (
  expressions,
  language,
  formatterContext,
  parameters,
) => {
  const expressionResult = expressions[0].evaluateString(language, formatterContext, parameters);

  if (typeof expressionResult !== 'string') {
    throw new ANTLRError(
      'numeralFemaleEnding -> "expressionResult" должен быть строкой',
      { expressionResult },
    );
  }

  const condition = parseInt(expressionResult);
  const val = condition % 10;

  return val === 3 && condition !== 13
    ? `${condition}-ью`
    : `${condition}-ую`;
};

// ---

export const numeralMaleEnding: CommonFunction = (
  expressions,
  language,
  formatterContext,
  parameters,
) => {
  const expressionResult = expressions[0].evaluateString(language, formatterContext, parameters);

  if (typeof expressionResult !== 'string') {
    throw new ANTLRError(
      'numeralMaleEnding -> "expressionResult" должен быть строкой',
      { expressionResult },
    );
  }

  const condition = parseInt(expressionResult);
  const val = condition % 10;

  if (
    (condition >= 10 && condition <= 20) ||
    (val === 0 && condition !== 0 && condition % 100 !== 40) ||
    (val === 1 || val === 4 || val === 5 || val === 9)
  ) {
    return `${condition}-ый`;
  }

  return val === 3
    ? `${condition}-ий`
    : `${condition}-ой`;
};

// ---

export const numeralNeuterEnding: CommonFunction = (
  expressions,
  language,
  formatterContext,
  parameters,
) => {
  const expressionResult = expressions[0].evaluateString(language, formatterContext, parameters);

  if (typeof expressionResult !== 'string') {
    throw new ANTLRError(
      'numeralNeuterEnding -> "expressionResult" должен быть строкой',
      { expressionResult },
    );
  }

  const condition = parseInt(expressionResult);
  const val = condition % 10;

  return val === 3 && condition !== 13
    ? `${condition}-ье`
    : `${condition}-ое`;
};
