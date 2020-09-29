import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { JsonUserService } from '../json-user.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  queryId;
  user: any;
  private subscription: Subscription;
  myForm: FormGroup;
//   ФИО  - "name" - <input />
// Почта  - "email" - <input />
// Адрес: 
// Улица -  "street" - <input />
// Дом - "suite": "Apt. 556", - <input />
// Город - "city" - <input />
// Индекс - "zipcode" - <input />
// Телефон -  "phone" - <input />
// Вэб сайт -  "website" - <input />
// Кампания - "company.name" - без редактирования (span)
  constructor(private rout: ActivatedRoute, private jsonUser: JsonUserService) { 
    this.myForm = new FormGroup({
      "name": new FormControl(this.user?.name),
      "email": new FormControl(this.user?.email),
      "street": new FormControl(this.user?.address?.street),
      "suite": new FormControl(this.user?.address?.suite),
      "city": new FormControl(this.user?.address?.city),
      "zipcode": new FormControl(this.user?.address?.zipcode),
      "phone": new FormControl(this.user?.phone),
      "website": new FormControl(this.user?.website),
      "company": new FormControl(this.user?.company?.name),
    });
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.rout.queryParams.
    subscribe((queryParams) => this.queryId = queryParams['id']);
    this.jsonUser.load(this.queryId).subscribe((data) => {
      console.log(data);
      this.user = data ;
     });
  }

  

}
