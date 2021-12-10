import { StringChunk } from './StringChunk';

export class NameString {
  private readonly _chunks: StringChunk[] = [];

  constructor(chunks: StringChunk[]) {
    this._chunks = chunks;
  }

  public format() {
    let finalValue = '';

    this._chunks.forEach((chunk) => {
      finalValue += chunk.writeTo();
    });

    return finalValue;
  }
}