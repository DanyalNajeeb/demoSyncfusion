// import { LoadData } from './../../NGRX/data.actions';
// import { Data } from './../../NGRX/data';
import { Component, OnInit, Input } from '@angular/core';
// import {CovidApiService} from '../../service/covid-api.service';
// import {Store} from '@ngrx/store';
// import {Observable} from 'rxjs';
import { Loadable } from '../../NGRX/loadable';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // data$:Observable<Data>;

  // displayLoader=true;
  // covidData;
  // public DataList:any=[];
  @Input() loadable: Loadable;


  constructor() {
    // this.data$ = this.store.select(state => state.data);
    // this.load();
    


    // displayLoader=true;
  //  this.inilialize();
   }

  //  load() {
  //   const action = new LoadData();
  //   this.store.dispatch(action);
  // }


  //  inilialize(){
  //   this.covidApi.getData().subscribe((data)=>{
  //     this.covidData=data;
  //     this.covidApi.processData();
  //     this.DataList= this.covidApi.getModelData();
  //     console.log(this.DataList);
  //     this.displayLoader=false;
  //      });
  //  }

  //  reload(){
  //    this.displayLoader=true;
  //   // this.inilialize();
  //  }
  ngOnInit(): void {
    
  }

}
