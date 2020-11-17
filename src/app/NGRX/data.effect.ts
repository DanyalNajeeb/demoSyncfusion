import { CovidApiService } from './../service/covid-api.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, delay, map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable, of, pipe } from 'rxjs';
import { LoadDataError, LoadDataSuccess, DataActionsTypes } from './Data.actions';
import { DataModel } from '../models/Data.model';

@Injectable()
export class DataEffects {

    constructor(private actions$: Actions, private covidApi: CovidApiService) {
    }

    @Effect()
    loadData = this.actions$.pipe(
        ofType(DataActionsTypes.Load),
        switchMap(action => {
            return this.covidApi.ApiResponse().pipe(
                map((response: any) => new LoadDataSuccess({ entities: (new DataModel()).setData(response) })),
                catchError(error => of(new LoadDataError(error)))
            );
        }),
    );
}