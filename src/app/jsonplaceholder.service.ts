import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {

  constructor(private http: HttpClient) { }

  load() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
}
