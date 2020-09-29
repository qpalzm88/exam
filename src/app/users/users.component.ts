import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { JsonplaceholderService } from '../jsonplaceholder.service';

export class User {
  userId: number;
  id: number;
  title: string;
  body: string;
  isDetail = false;
}

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: any [] = [];

  private subscription: Subscription;
  constructor(jsonplaceholder: JsonplaceholderService) {
    jsonplaceholder.load().subscribe((data: Array<User>) => {
     this.users = data ;
    });
  }

  onDetail(u: User){
    u.isDetail = !u.isDetail;
  }

 
}
