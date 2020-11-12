import { Component, OnInit } from '@angular/core';
import {CovidApiService} from '../../service/covid-api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public DataList: any = [
    { "id": "s_01", "text": "Robert", "avatar": "", "pic": "pic04", "color": "" },
    { "id": "s_02", "text": "Nancy", "avatar": "N", "pic": "", "color": "green" },
    { "id": "s_05", "text": "John", "pic": "pic01", "avatar": "", "color": "" },
    { "id": "s_05", "text": "John", "pic": "pic01", "avatar": "", "color": "" },

];
  constructor(private covidApi:CovidApiService) {

    this.covidApi.getData().subscribe((data)=>{
      console.log(data);
     
    });
   }

  ngOnInit(): void {
  }

}
