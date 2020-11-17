import { CovidApiService } from './../../service/covid-api.service';
import { Chart, DateTime, LineSeries } from '@syncfusion/ej2-charts';
import { Component, OnInit, Input } from '@angular/core';
// import { DataModel} from '../../models/data.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() data: any;
  @Input() key:any;
  CovidData;
  constructor( private covidApi:CovidApiService) {}
  iterate(data){
    for (let index = 0; index < data.length; index++) {
      if(data[index].cases != null){
        return data[index].cases;
      } 
    }
  }
  latestby(data){
    for (let index = 0; index < data.length; index++) {
      if(data[index].cases != null){
        return data[index].date;
      }
      
    }
  }
  
  sevenDay(data){
    var sum=0;
    for (let index = 0; index < 7; index++) {
     sum+=data[index].cases;
    }
    return sum;
  }

  sendData(data){
console.log()
    return data;
  }
  ngOnInit(): void {}

}
