import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpService: HttpClient) {}
  getFilms() {
    return this.httpService.get(
      'https://www.cavea.ge/api/v1/session/main/list/'
    );
  }
}
