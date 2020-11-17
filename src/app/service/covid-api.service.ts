import { DataModel } from './../models/Data.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment'
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidApiService {
  private API_SERVER = environment.apiUrl;
  private covidData;
  private totalCases;
  private deaths;
  private registered;
  private testCount;
  public CovidDATA: DataModel;
  public ModelData;
  constructor(private httpClient: HttpClient) { }
 

  // getData(){
  //   const reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
  //   const AreaType = "overview";
  //   const filters = [`areaType=${ AreaType }`]
  //   const structure = {
  //     date: "date",
  //     dailyCases :"newCasesByPublishDate",
  //     dailyDeaths:"newDeaths28DaysByPublishDate",
  //     dailyAdmissions:"newAdmissions",
  //     dailyTests:"newTestsByPublishDate"
  //   };
  //     return this.httpClient.get(this.API_SERVER+'?filters='+filters+'&structure='+JSON.stringify(structure), { headers: reqHeader }).pipe(map(data => {
  //     this.covidData=data['data'];
  //   }),catchError(err=>{
  //     return err}));

  // }

   ApiResponse(): Observable<{ todaysData: any }> {
    const reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
    const AreaType = "overview";
    const filters = [`areaType=${ AreaType }`]
    const structure = {
      date: "date",
      dailyCases :"newCasesByPublishDate",
      dailyDeaths:"newDeaths28DaysByPublishDate",
      dailyAdmissions:"newAdmissions",
      dailyTests:"newTestsByPublishDate"
    };
    return this.httpClient.get(this.API_SERVER+'?filters='+filters+'&structure='+JSON.stringify(structure), { headers: reqHeader }).pipe(map(data => {
          this.covidData=data['data'];
          return this.covidData;
        }),catchError(err=>{
          return err}));
  }
  getLastUpdate(){
    return this.covidData[0].date;
}

  processData(){
    this.CovidDATA = new DataModel();
    this.ModelData=this.CovidDATA.setData(this.covidData);
    }
    getModelData(){
      return this.ModelData;      
    }
}
