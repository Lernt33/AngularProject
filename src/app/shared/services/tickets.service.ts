import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketStorageService {
  private ticketsSubject = new BehaviorSubject<any[]>(this.loadFromLocalStorage() || []);

  constructor() {
    this.ticketsSubject.subscribe(tickets => {
      this.saveToLocalStorage(tickets);
    });
  }

  get tickets$() {
    return this.ticketsSubject.asObservable();
  }
  get ticketsValue$(){
    return this.ticketsSubject.value
  }
  private saveToLocalStorage(tickets: any[]) {
    localStorage.setItem('tickets', JSON.stringify(tickets));
  }

  private loadFromLocalStorage() {
    const savedTickets = localStorage.getItem('tickets');
    return savedTickets ? JSON.parse(savedTickets) : null;
  }

  addTicket(ticket: object) {
    const currentTickets = this.ticketsSubject.value;
    const updatedTickets = [...currentTickets, ticket];
    this.ticketsSubject.next(updatedTickets);
  }
  UpdateTicket(updatedTickets:object[]){
    this.ticketsSubject.next(updatedTickets)
  }
}
