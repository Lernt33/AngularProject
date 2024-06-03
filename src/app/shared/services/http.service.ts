import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { movie } from '@app-shared/interfaces';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpService: HttpClient) {}
  getFilms(): movie[] {
    let result!: movie[];
    this.httpService
      .get('https://www.cavea.ge/api/v1/session/main/list/')
      .subscribe((data: any) => (result = data));
    return result;
  }
}
