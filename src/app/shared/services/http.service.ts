import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {movie, Quote} from '@app-shared/interfaces';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  response!: movie[];
  quotes!:Quote[]
  constructor(private httpService: HttpClient) {
    this.httpService
      .get('https://www.cavea.ge/api/v1/session/main/list/')
      .subscribe((data: any) => (this.response = data));
    this.httpService
      .get('https://quoteapi.pythonanywhere.com/quotes/')
      .subscribe((data: any) => (this.quotes = data['Quotes'][0]));
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
  getALLQuotes(){
      return this.quotes
  }
}
