import { Parameters } from '../types';

import { NameStringExpression } from '../expressions/NameStringExpression';
import { NamesFormatterContext } from '../formatters/NamesFormatterContext';

// ---

export type CommonFunctionsName = 'signed' | 'trunc' | 'ceil' | 'decode';

export type CommonFunction = (
  expressions: NameStringExpression[],
  formatterContext: NamesFormatterContext,
  parameters: Parameters,
) => string;

// ---

export const signed: CommonFunction = (
  expressions,
  formatterContext,
  parameters
) => {
  const firstExpression = expressions[0];
  const stringValues = firstExpression.evaluateString(formatterContext, parameters);

  if (!stringValues) {
    return '0';
  }

  const value = parseFloat(stringValues);

  if (Math.abs(value) < 0.001) {
    return '0';
  }

  if (value > 0) {
    return `+${value}`;
  }

  return value.toString();
}

export const trunc: CommonFunction = (
  expressions,
  formatterContext,
  parameters,
) =>  {
  const firstExpression = expressions[0];
  const stringValues = firstExpression.evaluateString(formatterContext, parameters);

  if (!stringValues) {
    return '0';
  }

  return parseInt(stringValues).toString();
}

export const ceil: CommonFunction = (
  expressions,
  formatterContext,
  parameters,
) =>  {
  const firstExpression = expressions[0];
  const stringValues = firstExpression.evaluateString(formatterContext, parameters);

  if (!stringValues) {
    return '0';
  }

  return Math.ceil(parseFloat(stringValues)).toString();
}

export const decode: CommonFunction = (
  expressions,
  formatterContext,
  parameters
) => {
  const firstExpression = expressions[0];
  const cond = Boolean(firstExpression.evaluateValue(formatterContext, parameters));

  const result = cond
    ? expressions[1].evaluateString(formatterContext, parameters)
    : expressions[2].evaluateString(formatterContext, parameters);

  if (!result) {
    return '';
  }

  return result;
}
