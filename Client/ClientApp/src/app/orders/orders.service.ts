import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Order,UserCombo,CarCombo, OrderIns} from './order';


@Injectable()
export class HttpService{
  
    constructor(private http: HttpClient){ }
      
    getOrders():Observable<Order[]>{
        return this.http.get<Order[]>("http://localhost:52460/api/orders")
    }
    getUserList():Observable<UserCombo[]>
    {
        return this.http.get<UserCombo[]>("http://localhost:52460/api/users")
    }
    getCarList():Observable<CarCombo[]>
    {
        return this.http.get<UserCombo[]>("http://localhost:52460/api/cars")
    }
   /* postOrder(order:OrderIns)
    {
        const body = {name: order.id, age: order.carId};
        return this.http.post('http://localhost:60820/api/values', body); 
    }*/
}