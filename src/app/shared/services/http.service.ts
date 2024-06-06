import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { movie } from '@app-shared/interfaces';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  response!: movie[];
  constructor(private httpService: HttpClient) {
    this.httpService
      .get('https://www.cavea.ge/api/v1/session/main/list/')
      .subscribe((data: any) => (this.response = data));
  }

  getFilms() {
    return this.response;
  }
  getnames() {
    const temp: any[] = [];
    this.response.forEach((el) => {
      temp.push([el.name, el.id]);
    });
    return temp;
  }
  getFilmsbyId(id: number) {
    return this.response[id];
  }
}
