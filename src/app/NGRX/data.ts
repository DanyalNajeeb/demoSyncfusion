import { createDefaultLoadable, Loadable } from "./Loadable";
import { DataActions, DataActionsTypes } from "./Data.actions";
import { withLoadable } from "./WithLoadable";

export interface Data extends Loadable {
  entities: any;
}

export function createDefaultData(): Data {
  return {
    ...createDefaultLoadable(),
    entities: []
  };
}
function baseDataReducer(state: Data = createDefaultData(), action: DataActions): Data {
  switch (action.type) {
    case DataActionsTypes.LoadSuccess:
      state.entities = action.payload;
      return { ...state, entities: action.payload.entities };
    default:
      return state;
  }
}

export function DataReducer(state: Data, action: DataActions): Data {
  return withLoadable(baseDataReducer, {
    loadingActionType: DataActionsTypes.Load,
    successActionType: DataActionsTypes.LoadSuccess,
    errorActionType: DataActionsTypes.LoadError,
  })(state, action);
}
