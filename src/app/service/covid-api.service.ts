import { DataModel } from './../models/data.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment'
import { map, catchError } from 'rxjs/operators';

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
  // public typedata:typeModel[];
  constructor(private httpClient: HttpClient) { }
 

  getData(){
    const reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
    const AreaType = "overview";
    const filters = [`areaType=${ AreaType }`]
    const structure = {
      date: "date",
      dailyCases :"newCasesByPublishDate",
      dailyDeaths:"newDeaths28DaysByPublishDate",
      dailyAdmissions:"newAdmissions",
      dailyTests:"newTestsByPublishDate"
      // cases: {
      //     daily: "newCasesByPublishDate",
      //     cumulative: "cumCasesByPublishDate"
      // },
      // deaths: {
      //     daily: "newDeaths28DaysByPublishDate",
      //     cumulative: "cumDeaths28DaysByPublishDate"
      // },
      // admissions:{
      //   daily:"newAdmissions",
      //   cumulative:"cumAdmissions"
      // },
      // test:{
      //   daily:"newTestsByPublishDate",
      //   cumulative:"cumTestsByPublishDate"
      // }

        // date: "date",
        // cumCasesByPublishDate:"cumCasesByPublishDate",
        // newCasesByPublishDate:"newCasesByPublishDate",
        // newAdmissions:"newAdmissions",
        // newTestsByPublishDate:"newTestsByPublishDate",
        // cumTestsByPublishDate:"cumTestsByPublishDate",
        // newDeathsByDeathDate:"newDeathsByDeathDate",
        // // cumDeaths28DaysByPublishDate:"cumDeaths28DaysByPublishDate",
        // // cumDeaths28DaysByPublishDate:"cumDeaths28DaysByPublishDate",
        // newDeaths28DaysByPublishDate:"newDeaths28DaysByPublishDate"
    };
      console.log(this.API_SERVER+'?filters='+filters+'&structure='+JSON.stringify(structure));
      return this.httpClient.get(this.API_SERVER+'?filters='+filters+'&structure='+JSON.stringify(structure), { headers: reqHeader }).pipe(map(data => {
      this.covidData=data['data'];
      // console.log(this.covidData);

    }),catchError(err=>{
      console.log("serror")
      return err}));

  }
  // getCovidData(){
  //   console.log(this.covidData);
  //   return this.covidData['data'];
  // }


  getLastUpdate(){
    // console.log(this.covidData[0].date);
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
