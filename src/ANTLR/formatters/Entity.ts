import { I18Lang } from '../../locales';
import { CaseInsensitiveMap } from '../utils/CaseInsensitiveMap';

// ---

type Map = CaseInsensitiveMap<string, unknown>;

export class Entity {
  public properties: Map;

  constructor(properties: Record<string, unknown>) {
    this.properties = new CaseInsensitiveMap(Object.entries(properties));
  }

  public tryGetProperty(path: string[], language: I18Lang): string | null {
    let value = this.tryGetPathValue(path);

    if (typeof value === 'object' && value !== null) {
      if (value.hasOwnProperty(language)) {
        value = value[language as keyof typeof value];
      }
      else {
        return null;
      }
    }

    switch (typeof value) {
      case 'number':
        return value.toString(10);

      case 'string':
        return value;

      default:
        return null;
    }
  }

  private tryGetPathValue(path: string[]): unknown | null {
    let current: Map | unknown = this.properties;

    for (const name of path) {
      if (current instanceof CaseInsensitiveMap && current.has(name)) {
        current = current.get(name);
      }
      else {
        return null;
      }
    }

    return (current instanceof CaseInsensitiveMap)
      ? null
      : current;
  }
}
