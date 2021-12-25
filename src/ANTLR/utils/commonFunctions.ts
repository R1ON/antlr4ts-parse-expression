import { CommonFunction } from '../types';

import { ANTLRError } from './Error';

// ---

export const signed: CommonFunction = (
  expressions,
  language,
  formatterContext,
  parameters,
) => {
  const firstExpression = expressions[0];
  const stringValue = firstExpression.evaluateString(language, formatterContext, parameters);

  if (stringValue instanceof ANTLRError) {
    return stringValue;
  }

  if (!stringValue) {
    return '0';
  }

  const value = parseFloat(stringValue);

  if (Math.abs(value) < 0.001) {
    return '0';
  }

  if (value > 0) {
    return `+${value}`;
  }

  return value.toString();
};

// ---

export const trunc: CommonFunction = (
  expressions,
  language,
  formatterContext,
  parameters,
) => {
  const firstExpression = expressions[0];
  const stringValue = firstExpression.evaluateString(language, formatterContext, parameters);

  if (stringValue instanceof ANTLRError) {
    return stringValue;
  }

  if (!stringValue) {
    return '0';
  }

  return parseInt(stringValue).toString();
};

// ---

export const ceil: CommonFunction = (
  expressions,
  language,
  formatterContext,
  parameters,
) => {
  const firstExpression = expressions[0];
  const stringValue = firstExpression.evaluateString(language, formatterContext, parameters);

  if (stringValue instanceof ANTLRError) {
    return stringValue;
  }

  if (!stringValue) {
    return '0';
  }

  return Math.ceil(parseFloat(stringValue)).toString();
};

// ---

export const decode: CommonFunction = (
  expressions,
  language,
  formatterContext,
  parameters,
) => {
  const firstExpression = expressions[0];
  const cond = Boolean(firstExpression.evaluateValue(language, formatterContext, parameters));

  const result = cond
    ? expressions[1].evaluateString(language, formatterContext, parameters)
    : expressions[2].evaluateString(language, formatterContext, parameters);

  if (result instanceof ANTLRError) {
    return result;
  }

  if (!result) {
    return '';
  }

  return result;
};
