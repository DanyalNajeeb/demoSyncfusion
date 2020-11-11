import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  public data:  Object[];
  public xAxis: Object;
  public yAxis: Object;
  public chartTitle:string;


  constructor() { 
    this.chartTitle='sales Analysis'
    this.data=[
      {month:'jan',sales:35},
      {month:'feb',sales:28},
      {month:'Mar',sales:34},
      {month:'Apr',sales:32},
      {month:'May',sales:35},
      {month:'jun',sales:32},
      {month:'jul',sales:35},
      {month:'Aug',sales:55},
      {month:'sep',sales:38},
      {month:'Nov',sales:30},
      {month:'Dec',sales:50}
    ]
this.xAxis={
  title:'Month',
  valueType:'Category'
},
this.yAxis={
  title:'Sales'
}
  }

  ngOnInit(): void {
  }

}
