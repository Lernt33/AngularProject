import {Component, inject, OnInit} from '@angular/core';
import {TicketStorageService} from "@app-shared/services/tickets.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  tService = inject(TicketStorageService)
  protected readonly Date = Date;
  protected readonly DatePipe = DatePipe;
  constructor() {
    console.log(this.tService.ticketsValue$)
  }
  removeFromCart(index: number) {
    const updatedTickets = this.tService.ticketsValue$.filter((item, i) => i !== index);
    this.tService.UpdateTicket(updatedTickets);
  }
}
