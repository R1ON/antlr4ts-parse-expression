import { NamesFormatterContext, Entities } from './NamesFormatterContext';
import { ceil, signed, trunc, decode } from '../utils/commonFunctions';
import * as russian from '../utils/langFunctions/Russian';
import * as english from '../utils/langFunctions/English';

// ---

type EntityKey = 'object';

export class MatchNamesFormatterContext extends NamesFormatterContext {
  public OBJECT_KEY: EntityKey = 'object';
  public COMMON_FUNCTIONS = {
    ceil, signed, trunc, decode,
  };

  public RUSSIAN_FUNCTIONS = russian;
  public ENGLISH_FUNCTIONS = english;

  constructor() {
    super();

    this.addCommonFunctions(this.COMMON_FUNCTIONS);

    // TODO: сейчас языковые функции загружаются все сразу, потому что их очень мало
    // Как только прибавится другие языки, то нужно сделать динамическую подгрузку этих функций
    this.addLocalizedFunctions({ ru: this.RUSSIAN_FUNCTIONS });
    this.addLocalizedFunctions({ en: this.ENGLISH_FUNCTIONS });
  }

  public addObjects(entities: Entities): void {
    this.addEntities<EntityKey>({ [this.OBJECT_KEY]: entities });
  }
}
