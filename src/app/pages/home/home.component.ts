import { Component, OnInit, Input } from '@angular/core';
import {CovidApiService} from '../../service/covid-api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayLoader=false;
  covidData;
  public DataList:any=[];
  constructor(private covidApi:CovidApiService) {
   this.inilialize();
   }


   inilialize(){
    this.covidApi.getData().subscribe((data)=>{
      this.covidData=data;
      this.covidApi.processData();
      this.DataList= this.covidApi.getModelData();
      console.log(this.DataList);
      this.displayLoader=false;
       });
   }
   reload(){
     this.displayLoader=true;
    this.inilialize();
   }
  ngOnInit(): void {
  }

}
