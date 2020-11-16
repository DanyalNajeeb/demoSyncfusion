import { Component } from '@angular/core';
import { CovidApiService } from './service/covid-api.service';
import { Observable } from 'rxjs';
import { Data } from './NGRX/data';
import { Store } from '@ngrx/store';
import { LoadData } from './NGRX/data.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  datas$:Observable<Data>;
  lastUpdate;
  constructor(private store: Store<{data: Data}>) {
    // this.covidApi.getData().subscribe(()=>{
    // this.covidApi.processData();
    // // this.lastUpdate=this.covidApi.getLastUpdate();
    // // console.log();
    //  });
    // debugger;
    this.datas$ = this.store.select(state => state.data);
                              //<<<---using ()=> syntax
      this.load();
    
    // console.log(this.data$);
  }
  load() {
    const action = new LoadData();
    this.store.dispatch(action);
  }
  title = 'syncfusion';
}
