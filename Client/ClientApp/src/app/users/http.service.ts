import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from './user';


@Injectable()
export class HttpService{
  
    constructor(private http: HttpClient){ }
      
    getData():Observable<User[]>{
        return this.http.get<User[]>("http://localhost:52460/api/users")
}
}