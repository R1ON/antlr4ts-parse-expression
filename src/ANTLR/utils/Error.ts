// TODO: использовать везде этот класс для ошибок

export class ANTLRError {
  public static getErrorMessage(message: string, props: Record<string, unknown>) {
    console.error(message, props);
    return (new Error()).stack;
  }
}
