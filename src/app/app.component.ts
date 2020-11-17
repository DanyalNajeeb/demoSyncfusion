import { Component } from '@angular/core';
import { CovidApiService } from './service/covid-api.service';
import { Observable } from 'rxjs';
import { Data } from './NGRX/Data';
import { Store } from '@ngrx/store';
import { LoadData } from './NGRX/Data.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data$:Observable<Data>;
  lastUpdate;
  constructor(private store: Store<{Data: Data}>) {
    this.data$ = this.store.select(state => state.Data);
      this.load();
  }
  load() {
    const action = new LoadData();
    this.store.dispatch(action);
    
  }
  title = 'CoronaVirus Info';
}
