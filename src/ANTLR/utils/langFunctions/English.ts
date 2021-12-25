import { CommonFunction } from '../../types';
import { ANTLRError } from '../Error';

// ---
// --- Тут много магических цифр, чтобы понять, что они значат - смотри тесты.
// ---

export const plural: CommonFunction = (expressions, language, formatterContext, parameters) => {
  const countString = expressions[0].evaluateString(language, formatterContext, parameters);

  if (typeof countString !== 'string') {
    throw new ANTLRError(
      'English -> plural -> параметр "countString" должен быть строкой',
      { countString, countStringTypeof: typeof countString },
    );
  }

  const forms = expressions[1].evaluateValue(language, formatterContext, parameters);

  if (!Array.isArray(forms)) {
    throw new ANTLRError(
      'English -> plural -> "parameters" для функции "plural" должны быть переданы массивом',
      { parameters: forms },
    );
  }

  const floatCount = parseFloat(countString);

  let value;

  if (floatCount === 1) {
    value = forms[0];
  }
  else {
    value = forms[1];
  }

  if (value === null) {
    return '';
  }

  return value.toString();
};

// ---

export const numeralEnding: CommonFunction = (
  expressions,
  language,
  formatterContext,
  parameters,
) => {
  const expressionResult = expressions[0].evaluateString(language, formatterContext, parameters);

  if (typeof expressionResult !== 'string') {
    throw new ANTLRError(
      'numeralEnding -> "expressionResult" должен быть строкой',
      { expressionResult },
    );
  }

  const condition = parseInt(expressionResult);
  const m10 = condition % 10;
  const m100 = condition % 100;

  if (m10 === 1 && m100 !== 11) {
    return `${condition}-st`;
  }

  if (m10 === 2 && m100 !== 12) {
    return `${condition}-nd`;
  }

  if (m10 === 3 && m100 !== 13) {
    return `${condition}-d`;
  }

  return `${condition}-th`;
};
