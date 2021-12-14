import { NamesFormatterContext, Entities } from './NamesFormatterContext';
import { ceil, signed, trunc, decode } from '../utils/commonFunctions';

type EntityKey = 'object';

export class MatchNamesFormatterContext extends NamesFormatterContext {
  public OBJECT_KEY: EntityKey = 'object';
  public COMMON_FUNCTIONS = {
    ceil, signed, trunc, decode,
  };

  constructor() {
    super();

    this.addCommonFunctions(this.COMMON_FUNCTIONS);
  }

  public addObjects(entities: Entities) {
    this.addEntities<EntityKey>({ [this.OBJECT_KEY]: entities });
  }
}
