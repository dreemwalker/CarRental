import { Component, OnInit } from '@angular/core';
import {Order,UserCombo,CarCombo } from "./order";
import {HttpService} from "./orders.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers:[HttpService]
})
export class OrdersComponent implements OnInit {
  orders: Order[];
  constructor(private httpService: HttpService){}
  userlist:UserCombo[];
  carlist:CarCombo[];
  ngOnInit() {
    this.httpService.getOrders().subscribe(value => this.orders= value);
  }

}
