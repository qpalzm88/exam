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

  constructor(private rout: ActivatedRoute, private jsonUser: JsonUserService) { 
    this.myForm = new FormGroup({
      "name": new FormControl(),
      "email": new FormControl(),
      "street": new FormControl(),
      "suite": new FormControl(),
      "city": new FormControl(),
      "zipcode": new FormControl(),
      "phone": new FormControl(),
      "website": new FormControl(),
      "company": new FormControl(),
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
