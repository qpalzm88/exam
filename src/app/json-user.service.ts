import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonUserService {

  constructor(private http: HttpClient) { }

  load(id: any) {
    return this.http.get("https://jsonplaceholder.typicode.com/users" + "/" + id);
  }
}
