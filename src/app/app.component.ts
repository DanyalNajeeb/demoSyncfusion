import { Component } from '@angular/core';
import { CovidApiService } from './service/covid-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

lastUpdate;
  constructor(private covidApi:CovidApiService) {
    // this.covidApi.getData().subscribe(()=>{
    // this.covidApi.processData();
    // // this.lastUpdate=this.covidApi.getLastUpdate();
    // // console.log();
    //  });
   }
  title = 'syncfusion';
}
