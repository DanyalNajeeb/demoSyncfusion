import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule, SplineSeriesService } from '@syncfusion/ej2-angular-charts';
import { DateTimeService, LineSeriesService, DateTimeCategoryService, StripLineService} from '@syncfusion/ej2-angular-charts';
import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule, RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './shared/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartsComponent} from './shared/charts/charts.component';
import { StoreModule } from '@ngrx/store';
import { DataReducer } from './NGRX/Data';
import { EffectsModule } from '@ngrx/effects';
import { DataEffects } from './NGRX/Data.effect';
import { StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    CardComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    SidebarModule, 
    ButtonModule,
    StoreModule.forRoot({Data: DataReducer}),
    RadioButtonModule,
    HttpClientModule,
    ChartModule,
    ButtonModule,
    EffectsModule.forRoot([DataEffects]),
    StoreDevtoolsModule.instrument()
    
  ],
  bootstrap: [AppComponent],
  providers: [ DateTimeService,SplineSeriesService, LineSeriesService, DateTimeCategoryService, StripLineService]
 
})
export class AppModule { }
