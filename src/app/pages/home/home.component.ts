// import { LoadData } from './../../NGRX/data.actions';
// import { Data } from './../../NGRX/data';
import { Component, OnInit, Input } from '@angular/core';
import { Loadable } from "../../NGRX/Loadable";
// import {onLoadableSuccess} from "../../NGRX/Loadable";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() loadable: Loadable;
  ngOnInit(): void {
    
  }

}
