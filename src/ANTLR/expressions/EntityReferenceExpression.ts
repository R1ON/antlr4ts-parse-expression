import { NameStringExpression } from './NameStringExpression';
import { EvaluateStringExp, EvaluateValueExp } from '../types';

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
    // TODO нужно дописать Entity из formatter папки
    return null;
  };

  public evaluateValue: EvaluateValueExp = (formatterContext, parameters) => {
    this.evaluateString(formatterContext, parameters);
  };
}