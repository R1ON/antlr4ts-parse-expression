import { Entity } from './Entity';
import { CommonFunctionsName, CommonFunction } from '../utils/commonFunctions';
import { CaseInsensitiveMap } from '../utils/CaseInsensitiveMap';

// ---

type TeamId = string;
export type Entities = Record<TeamId, Record<string, unknown>>;
type EntitiesByKey<Key extends string> = Record<Key, Entities>;

type Functions = Record<CommonFunctionsName, CommonFunction>;

// ---

export class NamesFormatterContext {
  public entitiesById = new CaseInsensitiveMap<string, CaseInsensitiveMap<TeamId, Entity>>();
  private _functions: Functions;
  // private _localizedFunctions = [];

  public addEntities<EntityKey extends string>(entities: EntitiesByKey<EntityKey>) {
    for (const name in entities) {
      const entitiesById = this.entitiesById.has(name)
        ? this.entitiesById.get(name)
        : new CaseInsensitiveMap<TeamId, Entity>();

      const newEntitiesById = entities[name];

      for (const teamId in newEntitiesById) {
        const parameters = newEntitiesById[teamId];

        entitiesById.set(teamId, new Entity(parameters));
      }

      this.entitiesById.set(name, entitiesById);
    }
  }

  public addCommonFunctions(functions: Functions) {
    this._functions = functions;
  }

  public tryGetFunction(name: CommonFunctionsName | string) {
    if (!this._functions) {
      return null;
    }

    return name in this._functions
      ? this._functions[name]
      : null;
  }

  //  internal bool TryGetFunction(string name,
  //                                      string language,
  //                                      [MaybeNullWhen(false)] out NameFunction function)
  //         {
  //             if (_functions.TryGetValue(name, out function))
  //                 return true;
  //
  //             return _localizedFunctions.TryGetValue(language, out var functions)
  //                    && functions.TryGetValue(name, out function);
  //         }
}
