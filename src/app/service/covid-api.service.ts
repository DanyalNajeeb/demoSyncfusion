import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment'
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CovidApiService {
  private API_SERVER = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }
 

  getData(){
    const reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });

    const AreaType = "overview";
    const filters = [`areaType=${ AreaType }`]
    const structure = {
        date: "date",
        cumCasesByPublishDate:"cumCasesByPublishDate",
        newAdmissions:"newAdmissions",
        cumTestsByPublishDate:"cumTestsByPublishDate",
        cumDeaths28DaysByPublishDate:"cumDeaths28DaysByPublishDate"

    };
console.log(this.API_SERVER+'?filters='+filters+'&structure='+JSON.stringify(structure));
return this.httpClient.get(this.API_SERVER+'?filters='+filters+'&structure='+JSON.stringify(structure), { headers: reqHeader }).pipe(map(data => {
      console.log(data);
    }),catchError(err=>{
      console.log("serror")
      return err}));

  }
}
