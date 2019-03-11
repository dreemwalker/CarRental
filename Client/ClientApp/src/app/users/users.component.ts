import { Component, OnInit } from '@angular/core';
import { HttpService} from './users.service';
import {User} from './user';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [HttpService]
})
export class UsersComponent implements OnInit {
    users:User[];

 constructor(private httpService: HttpService){}

  ngOnInit() {
    this.httpService.getData().subscribe(value => this.users= value);
  }

}
