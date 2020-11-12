import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {ChartModule,LineSeriesService,CategoryService} from  '@syncfusion/ej2-angular-charts';
import { AppComponent } from './app.component';
// import { ChartsComponent } from './shared/charts/charts.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule, RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './shared/card/card.component';
import { HttpClientModule } from '@angular/common/http';
//import { HttpErrorInterceptor } from './interceptor/httperrorinterceptor.service';
//import {HttpRequestInterceptor} from './interceptor/HttpRequestInterceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    SidebarModule, 
    ButtonModule,
    RadioButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
