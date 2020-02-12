import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ExampleDataTableService {
  constructor(private http: HttpClient) {}

  getDatas(search, sortType, sortBy, page, maxRows) {
    return this.http.post('https://datatable-demo-api.herokuapp.com/public/api/users', {search, page, maxRows, sortBy, sortType});
  }
}
