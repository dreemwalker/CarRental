import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Order,UserCombo,CarCombo, OrderIns} from './order';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class HttpService{
  
    constructor(private http: HttpClient){ }
      
    getOrders():Observable<Order[]>{
        return this.http.get<Order[]>("http://localhost:52460/api/orders")
    }
    //get users data
    getUserList():Observable<UserCombo[]>
    {
        return this.http.get<UserCombo[]>("http://localhost:52460/api/users")
    }
     //get cars data
    getCarList():Observable<CarCombo[]>
    {
        return this.http.get<UserCombo[]>("http://localhost:52460/api/cars")
    }
   postOrder(order:OrderIns)
    {
        const body = {carId: order.carId, userId: order.userId, beginDate:order.beginDate, endDate:order.endDate, comment:order.comment};
        return this.http.post('http://localhost:60820/api/values', body,httpOptions); 
    }
    putOrder(order:OrderIns)
    {
        const body = {carId: order.carId, userId: order.userId, beginDate:order.beginDate, endDate:order.endDate, comment:order.comment};
        return this.http.put('http://localhost:60820/api/values', body,httpOptions); 
    }
    deleteOrder(id:number)
    {
        const url = `${"http://localhost:52460/api/orders"}/${id}`; 
        return this.http.delete(url,httpOptions);
    }
}