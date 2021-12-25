import { I18Lang } from '../locales';

import { NamesFormatterContext } from './formatters/NamesFormatterContext';
import { NameStringExpression } from './expressions/NameStringExpression';
import { ANTLRError } from './utils/Error';

// ---

type ParameterValues = unknown;
export type Parameters = Record<string, ParameterValues>;

export type FunctionWithContext<T> = (
  language: I18Lang,
  formatterContext: NamesFormatterContext,
  parameters: Parameters,
) => T;

// ---

export type CommonFunctionsName = 'signed' | 'trunc' | 'ceil' | 'decode';
export type RussianFunctionsName = 'plural' | 'numeralFemaleEnding' | 'numeralMaleEnding' | 'numeralNeuterEnding';
export type EnglishFunctionsName = 'plural' | 'numeralEnding';

export type CommonFunction = (
  expressions: NameStringExpression[],
  language: I18Lang,
  formatterContext: NamesFormatterContext,
  parameters: Parameters,
) => string | ANTLRError;

// ---

type EvaluateStringReturnType = string | null | ANTLRError;

type EvaluateValue = number | EvaluateStringReturnType;
export type EvaluateValueReturnType = EvaluateValue | EvaluateValue[];

export type EvaluateStringExp = FunctionWithContext<EvaluateStringReturnType>;
export type EvaluateValueExp = FunctionWithContext<EvaluateValueReturnType>;
