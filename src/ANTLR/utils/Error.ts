export class ANTLRError {
  public static getErrorMessage(message: string, props?: Record<string, unknown>) {
    if (props) {
      console.error(message, props);
    }
    else {
      console.error(message);
    }

    return (new Error()).stack;
  }
}
