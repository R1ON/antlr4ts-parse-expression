import { StringChunk } from './StringChunk';
import { FunctionWithContext } from '../types';

export class NameString {
  private readonly _chunks: StringChunk[] = [];

  constructor(chunks: StringChunk[]) {
    this._chunks = chunks;
  }

  public format: FunctionWithContext<void> = (
    language,
    formatterContext,
    parameters,
  ) => {
    let finalValue = '';

    this._chunks.forEach((chunk) => {
      finalValue += chunk.writeTo(language, formatterContext, parameters);
    });

    return finalValue;
  };
}
