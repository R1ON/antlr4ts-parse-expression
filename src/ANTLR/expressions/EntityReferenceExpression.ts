import { NameStringExpression } from './NameStringExpression';
import { EvaluateStringExp, EvaluateValueExp } from '../types';

import { Entity } from '../formatters/Entity';
import { ANTLRError } from '../utils/Error';

// ---


export class EntityReferenceExpression extends NameStringExpression {
  public entityName: string;
  public keyArgument: NameStringExpression | null;
  public path: string[];

  constructor(
    entityName: string,
    keyArgument: NameStringExpression | null,
    path: string[],
  ) {
    super();

    this.entityName = entityName;
    this.keyArgument = keyArgument;
    this.path = path;
  }

  public evaluateString: EvaluateStringExp = (language, formatterContext, parameters) => {
    let entity: Entity;

    if (this.keyArgument === null) {
      // TODO: когда научится, нужно дописать тест. Тест уже подготовлен, нужно искать по ключу (EntityReferenceExpressionTestTODO)
      throw new ANTLRError(
        'EntityReferenceExpression -> evaluateString еще не умеет работать с аргументами',
        { argument: this.keyArgument },
      );
    }
    else {
      if (!formatterContext.entitiesById.has(this.entityName)) {
        throw new ANTLRError(
          `EntityReferenceExpression -> поле ${this.entityName} не найдено в контексте`,
          { formatterContext },
        );
      }

      const entities = formatterContext.entitiesById.get(this.entityName);

      if (!entities) {
        throw new ANTLRError(
          'EntityReferenceExpression -> "entities" должен быть Map',
          { entities },
        );
      }

      const key = this.keyArgument.evaluateValue(language, formatterContext, parameters);

      if (key === null) {
        throw new ANTLRError(
          `EntityReferenceExpression -> для ${this.entityName} не найден "key"`,
          { key },
        );
      }

      const stringKey = this.convertEvaluatedValueToString(key);

      if (stringKey === null) {
        throw new ANTLRError(
          'EntityReferenceExpression -> "key" должен быть строкой или числом',
          { key, keyType: typeof key },
        );
      }

      if (!entities.has(stringKey)) {
        throw new ANTLRError(
          `EntityReferenceExpression -> "entity" по ключу ${stringKey} не найден`,
          { entities },
        );
      }

      entity = entities.get(stringKey) as Entity;
    }

    const value = entity.tryGetProperty(this.path, language);

    if (value === null) {
      throw new ANTLRError(
        'EntityReferenceExpression -> не получилось найти значение по пути "path" в объекте "entity"',
        { path: this.path, entity },
      );
    }

    return value;
  };

  public evaluateValue: EvaluateValueExp = (language, formatterContext, parameters) => {
    return this.evaluateString(language, formatterContext, parameters);
  };
}
