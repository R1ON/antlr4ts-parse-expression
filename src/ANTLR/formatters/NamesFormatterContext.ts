import { I18Lang } from '../../locales';
import {
  CommonFunctionsName,
  RussianFunctionsName,
  EnglishFunctionsName,
  CommonFunction,
} from '../types';

import { Entity } from './Entity';
import { CaseInsensitiveMap } from '../utils/CaseInsensitiveMap';

// ---

type TeamId = string;
export type Entities = Record<TeamId, Record<string, unknown>>;
type EntitiesByKey<Key extends string> = Record<Key, Entities>;

type CommonFunctions = Record<CommonFunctionsName, CommonFunction>;

// ---

type LocalizedRussianFunctions = Record<RussianFunctionsName, CommonFunction>;
type LocalizedEnglishFunctions = Record<EnglishFunctionsName, CommonFunction>;
type LocalizedFunctions = Partial<{
  ru: LocalizedRussianFunctions;
  en: LocalizedEnglishFunctions;
}>;

// ---

export class NamesFormatterContext {
  public entitiesById = new CaseInsensitiveMap<string, CaseInsensitiveMap<TeamId, Entity>>();
  private _functions: CommonFunctions | null = null;
  private _localizedFunctions: LocalizedFunctions | null = null;

  public addEntities<EntityKey extends string>(entities: EntitiesByKey<EntityKey>): void {
    for (const name in entities) {
      const entitiesById = this.entitiesById.has(name)
        ? (this.entitiesById.get(name) as CaseInsensitiveMap<TeamId, Entity>)
        : new CaseInsensitiveMap<TeamId, Entity>();

      const newEntitiesById = entities[name];

      for (const teamId in newEntitiesById) {
        const parameters = newEntitiesById[teamId];

        entitiesById.set(teamId, new Entity(parameters));
      }

      this.entitiesById.set(name, entitiesById);
    }
  }

  public addCommonFunctions(functions: CommonFunctions): void {
    this._functions = functions;
  }

  public addLocalizedFunctions(functions: LocalizedFunctions): void {
    if (this._localizedFunctions === null) {
      this._localizedFunctions = functions;
      return;
    }

    this._localizedFunctions = { ...this._localizedFunctions, ...functions };
  }

  public tryGetFunction(
    name: CommonFunctionsName | string,
    language: I18Lang,
  ): CommonFunction | null {
    if (this.isCommonFunction(name)) {
      if (this._functions === null) {
        return null;
      }

      return this._functions[name];
    }

    if (this._localizedFunctions === null || !this.isSupportedLang(language)) {
      return null;
    }

    const functionsByLang = this._localizedFunctions[language];

    if (functionsByLang && name in functionsByLang) {
      return functionsByLang[name as keyof typeof functionsByLang];
    }

    return null;
  }

  private isCommonFunction(name: CommonFunctionsName | string): name is CommonFunctionsName {
    if (this._functions === null) {
      return false;
    }

    return name in this._functions;
  }

  private isSupportedLang(language: I18Lang): language is 'ru' | 'en' {
    return this._localizedFunctions !== null && language in this._localizedFunctions;
  }
}
