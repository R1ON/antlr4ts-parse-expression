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

  public evaluateString: EvaluateStringExp = (formatterContext, parameters) => {
    let entity: Entity;

    if (this.keyArgument === null) {
      throw ANTLRError.getErrorMessage(
        'EntityReferenceExpression -> evaluateString еще не умеет работать с аргументами',
        { argument: this.keyArgument },
      );
    }
    else {
      if (!formatterContext.entitiesById.has(this.entityName)) {
        throw ANTLRError.getErrorMessage(
          `EntityReferenceExpression -> поле ${this.entityName} не найдено в контексте`,
          { formatterContext },
        );
      }

      const entities = formatterContext.entitiesById.get(this.entityName);
      
      const key = this.keyArgument.evaluateValue(formatterContext, parameters);
      
      if (key === null) {
        throw ANTLRError.getErrorMessage(
          `EntityReferenceExpression -> для ${this.entityName} не найден "key"`,
          { key },
        );
      }
      
      let stringKey: string;
      
      switch (typeof key) {
        case 'string':
          stringKey = key; break;
        case 'number':
          stringKey = key.toString(); break;
        default:
          throw ANTLRError.getErrorMessage(
           'EntityReferenceExpression -> "key" должен быть строкой или числом',
            { key, keyType: typeof key },
          );
      }

      if (!entities.has(stringKey)) {
        throw ANTLRError.getErrorMessage(
          `EntityReferenceExpression -> "entity" по ключу ${stringKey} не найден`,
          { entities },
        );
      }
      
      entity = entities.get(stringKey);
    }
    
    return entity.tryGetProperty(formatterContext, this.path);
  };

  public evaluateValue: EvaluateValueExp = (formatterContext, parameters) => {
    this.evaluateString(formatterContext, parameters);
  };
}