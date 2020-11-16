import { CovidApiService } from './../service/covid-api.service';
import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, delay, map, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Observable, of, pipe} from 'rxjs';
import {LoadDataError, LoadDataSuccess, DataActionsTypes} from './data.actions';

@Injectable()
export class DataEffects {

  constructor(private actions$: Actions, private covidApi: CovidApiService) {
  }

  @Effect()
  loadData = this.actions$.pipe(
    ofType(DataActionsTypes.Load),
    switchMap(action => {
      // return this.http.get('some url');
      return this.covidApi.ApiResponse().pipe(
        map((response: any) =>  new LoadDataSuccess({entities: response})),
        catchError(error => of(new LoadDataError(error)))
      );
    }),
  );
}