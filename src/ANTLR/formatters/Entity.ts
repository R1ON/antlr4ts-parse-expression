import { CaseInsensitiveMap } from '../utils/CaseInsensitiveMap';

// ---

type Map = CaseInsensitiveMap<string, unknown>;

export class Entity {
  public properties: Map;

  constructor(properties: Record<string, unknown>) {
    this.properties = new CaseInsensitiveMap(Object.entries(properties));
  }

  public tryGetProperty(path: string[]): string | null {
    const value = this.tryGetPathValue(path);

    if (value === null || value === undefined) {
      return null;
    }

    if (typeof value === 'object') {
      return null;
    }

    return value.toString();
  }

  private tryGetPathValue(path: string[]): Map | unknown {
    let current: Map | unknown = this.properties;
    let result = null;

    for (const name of path) {
      if (current instanceof CaseInsensitiveMap && current.has(name)) {
        current = current.get(name);
      }
      else {
        return result;
      }
    }

    return current;
  }
}
