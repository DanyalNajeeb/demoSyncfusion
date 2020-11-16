import { onLoadableLoad, onLoadableSuccess, onLoadableError, Loadable } from "./loadable";

export interface Action {
    type: string;
  }
  export interface ActionTypes {
    loadingActionType: any | any[];
    successActionType: any | any[];
    errorActionType: any | any[];
  }
  export interface ReducerFunction<T, U extends Action> {
    (state: T, action: U): T;
  }
  export function withLoadable<T extends Loadable, U extends Action = Action>(reducer: ReducerFunction<T, U>, {loadingActionType, successActionType, errorActionType}: ActionTypes) {
    console.log(reducer);
    
    return (state: T, action: U): T => {
      if (matchType(loadingActionType, action.type)) {
          console.log("a");
          state = onLoadableLoad(state);
          console.log(state);
      }
      if  (matchType(successActionType, action.type)) {
        console.log("b");
        console.log(state);
        state = onLoadableSuccess(state);
        console.log(state);

      }
      if (matchType(errorActionType, action.type)) {
        console.log("c");
        state = onLoadableError(state, (action as any).error);
        console.log(state);

      }
      return reducer(state, action);
    };
    function matchType(actionType: string | string[], type: string): boolean {
        return typeof actionType === 'string' ? actionType === type : actionType.indexOf(type) !== -1;
      }
  }