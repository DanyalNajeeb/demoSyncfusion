import {Action} from '@ngrx/store';

export enum DataActionsTypes {
    Load = '[DATA PAGE] LOAD DATA',
    LoadSuccess = '[DATA PAGE] LOAD DATA SUCCESS',
    LoadError = '[DATA PAGE] LOAD DATA ERROR',
  }

  export class LoadData implements Action {
    readonly type = DataActionsTypes.Load;
  }

  export class LoadDataSuccess implements Action {
    readonly type = DataActionsTypes.LoadSuccess;
    constructor(public payload: {entities: any}) {console.log(this.payload)}
  }
  
  export class LoadDataError implements Action {
    readonly type = DataActionsTypes.LoadError;
    constructor(public error: any) {}
  }

  export type DataActions = LoadData | LoadDataSuccess | LoadDataError
