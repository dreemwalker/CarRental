import { Component, OnInit } from '@angular/core';
import {Order,UserCombo,CarCombo,OrderIns } from "./order";
import {HttpService} from "./orders.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers:[HttpService]
})
export class OrdersComponent implements OnInit {
  orders: Order[];
  userlist:UserCombo[];
  carlist:CarCombo[];
  orderpost:Order=new Order; //object for requests;
  
  constructor(private httpService: HttpService){}
  
  ngOnInit() {
    this.httpService.getOrders().subscribe(value => this.orders= value);
    this.httpService.getCarList().subscribe(value => this.carlist= value);
    this.httpService.getUserList().subscribe(value=>this.userlist=value);
  }

  addOrder(order:Order){
    console.log(order);
    this.httpService.postOrder(order);
  }
  deleteOrder(){

  }
  updateOrder(){
    
  }

}
