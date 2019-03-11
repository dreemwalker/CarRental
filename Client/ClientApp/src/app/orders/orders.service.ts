import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Order,UserCombo,CarCombo} from './order';


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
}