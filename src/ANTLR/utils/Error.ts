import { ANTLRErrorListener as ErrorListener, Token } from 'antlr4ts';

export type ANTLRErrorProps = {
  message: string;
  props?: Record<string, unknown>;
  stack: Error['stack'];
};

export class ANTLRError implements ANTLRErrorProps {
  public message: ANTLRErrorProps['message'];
  public props: ANTLRErrorProps['props'];
  public stack: ANTLRErrorProps['stack'];

  constructor(message: ANTLRErrorProps['message'], props?: ANTLRErrorProps['props']) {
    this.message = message;
    this.props = props;
    this.stack = (new Error()).stack;
  }
}

// ---

type Listener = ErrorListener<Token>;

export class ANTLRErrorListener implements Listener {
  public syntaxError: Listener['syntaxError'] = (
    _recognizer,
    _offendingSymbol,
    line,
    charPositionInLine,
    message,
  ): ANTLRError => {
    throw new ANTLRError('ANTLRErrorListener -> ошибка синтаксиса', {
      startLineNumber: line,
      endLineNumber: line,
      startColumn: charPositionInLine,
      endColumn: charPositionInLine + 1,
      message,
    });
  };
}
