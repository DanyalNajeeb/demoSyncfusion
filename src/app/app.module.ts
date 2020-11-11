import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ChartModule,LineSeriesService,CategoryService} from  '@syncfusion/ej2-angular-charts';
import { AppComponent } from './app.component';
import { ChartsComponent } from './shared/charts/charts.component';
import { GridModule, PagerModule } from '@syncfusion/ej2-angular-grids';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent
    
  ],
  imports: [
    BrowserModule,
    ChartModule,
    GridModule, PagerModule,
    
  ],
  providers: [LineSeriesService,CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
