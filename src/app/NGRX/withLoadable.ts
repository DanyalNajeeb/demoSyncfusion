import { onLoadableLoad, onLoadableSuccess, onLoadableError ,Loadable} from "./Loadable";

export interface Action {
    type: any;
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
    return (state: T, action: U): T => {
      if (matchType(loadingActionType, action.type)) {
          state = onLoadableLoad(state);
      }
      if  (matchType(successActionType, action.type)) {
        state = onLoadableSuccess(state);
     }
      if (matchType(errorActionType, action.type)) {
        state = onLoadableError(state, (action as any).error);
      }
      return reducer(state, action);
    };
    function matchType(actionType: any | any[], type: any): boolean {
        return typeof actionType === 'string' ? actionType === type : actionType.indexOf(type) !== -1;
      }
  }