import { NameStringParser } from './NameStringParser';
import { MatchNamesFormatterContext } from './formatters/MatchNamesFormatterContext';
import { ANTLRError, ANTLRErrorProps as ErrorProps } from './utils/Error';

// ---

export type ANTLRErrorProps = ErrorProps;

export {
  ANTLRError,
  NameStringParser,
  MatchNamesFormatterContext,
};
