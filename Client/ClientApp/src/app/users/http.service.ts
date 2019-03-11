import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from './user';


@Injectable()
export class HttpService{
  
    constructor(private http: HttpClient){ }
      
    getData():Observable<User[]>{
        return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users")
}
}