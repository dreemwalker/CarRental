import { Component, OnInit } from '@angular/core';
import {Car} from './car';
import {HttpService} from './cars.service';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  providers:[HttpService]
})
export class CarsComponent implements OnInit {
  cars:Car[];
  constructor(private httpService: HttpService){}

  ngOnInit() {
    this.httpService.getData().subscribe(value => this.cars= value);
   
  }
  ss()
  {
    console.log(this.cars);
  }

}
