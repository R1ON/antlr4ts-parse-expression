export class Entity {
  public properties: Record<string, unknown>;

  constructor(properties: Record<string, unknown>) {
    this.properties = properties;
  }
}
