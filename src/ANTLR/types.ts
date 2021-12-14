import { NamesFormatterContext } from './formatters/NamesFormatterContext';

// ---

type ParameterValues = unknown;
export type Parameters = Record<string, ParameterValues>;

export type FunctionWithContext<T> = (
  formatterContext: NamesFormatterContext,
  parameters: Parameters,
) => T;

// ---

type ThrowError = never;

type EvaluateStringReturnType = string | null | ThrowError;

type EvaluateValue = string | number | null | ThrowError | ParameterValues;
type EvaluateValueReturnType = EvaluateValue | EvaluateValue[];

export type EvaluateStringExp = FunctionWithContext<EvaluateStringReturnType>;
export type EvaluateValueExp = FunctionWithContext<EvaluateValueReturnType>;
