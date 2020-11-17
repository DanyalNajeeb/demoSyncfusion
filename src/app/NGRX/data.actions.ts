import { Action } from '@ngrx/store';

export enum DataActionsTypes {
  Load = '[DATA] LOAD ',
  LoadSuccess = '[DATA] LOAD SUCCESS',
  LoadError = '[DATA] LOAD ERROR',
}

export class LoadData implements Action {
  readonly type = DataActionsTypes.Load;
}

export class LoadDataSuccess implements Action {
  readonly type = DataActionsTypes.LoadSuccess;
  constructor(public payload: { entities: any }) { }
}

export class LoadDataError implements Action {
  readonly type = DataActionsTypes.LoadError;
  constructor(public error: any) { }
}

export type DataActions = LoadData | LoadDataSuccess | LoadDataError
