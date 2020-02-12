import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ExampleDataTableService {
  constructor(private http: HttpClient) {}

  getDatas(search, sortType, sortBy, page, maxRows) {
    return this.http.post('http://datatablepagination.test/api/users', {search, page, maxRows, sortBy, sortType});
  }
}
