import { Component, OnInit, Input } from '@angular/core';
import { Chart, DateTime, LineSeries,IAxisLabelRenderEventArgs  } from '@syncfusion/ej2-charts';
import { inputs } from '@syncfusion/ej2-angular-buttons/src/button/button.component';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  @Input() Data: any;
  @Input() Key:any;
  public i:number = 0;
  public id:string ='chart-container';
  public primaryXAxis: Object;
  public title: string;
  public primaryYAxis: Object;
  public items:any =[];
  
  constructor() {
  //  console.log(this.Key); 
  }


  ngOnInit(): void {      
    this.primaryXAxis = {
      valueType: 'DateTime',
      labelFormat: 'dMMM'
  };
 
  }

}
