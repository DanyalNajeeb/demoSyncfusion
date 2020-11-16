import { Loadable, createDefaultLoadable, onLoadableLoad, onLoadableSuccess, onLoadableError } from "./loadable";
import { DataActions, DataActionsTypes } from "./data.actions";
import { withLoadable } from "./withLoadable";

export interface Data extends Loadable {
    entities: any;
}

export function createDefaultData(): Data {
    return {
      ...createDefaultLoadable(),
      entities:[]
    };
  }
  function baseDataReducer(state: Data = createDefaultData(), action: DataActions): Data {
    switch (action.type) {
      case DataActionsTypes.LoadSuccess:
      // console.log(action.type);
      // console.log(DataActionsTypes.LoadSuccess);
      // console.log(action.payload.entities);
      // state.entities=action.payload;
  
        return {...state,entities: action.payload };
      default:
        console.log("fds");
        return state;
    }
  }

  export function DataReducer(state: any, action: DataActions): Data {
    
    // console.log(baseDataReducer);
    return withLoadable(baseDataReducer, {
      loadingActionType: DataActionsTypes.Load,
      successActionType: DataActionsTypes.LoadSuccess,
      errorActionType: DataActionsTypes.LoadError,
    })(state, action);
  }

  // export function DataReducer(state: Data = createDefaultData(), action: DataActions): Data {
  //   console.log(action.type);
  //   switch (action.type) {
  //     case DataActionsTypes.Load:
  //       return onLoadableLoad(state);
  //     case DataActionsTypes.LoadSuccess:
  //       return {
  //         ...onLoadableSuccess(state),
  //         entities: action.payload.entities
  //       };
  //     case DataActionsTypes.LoadError:
  //       return onLoadableError(state, action.error);
  //     default:
  //       return state;
  //   }
  // }