import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Car} from './car';


@Injectable()
export class HttpService{
  
    constructor(private http: HttpClient){ }
      
    getData():Observable<Car[]>{
        return this.http.get<Car[]>("http://localhost:52460/api/cars")
}
}