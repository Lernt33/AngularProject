import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-quote-card',
  standalone: true,
  imports: [],
  templateUrl: './quote-card.component.html',
  styleUrl: './quote-card.component.scss'
})
export class QuoteCardComponent {
  @Input() quote: string = '';
  @Input() movieTitle: string = '';
  @Input() author: string = '';
}
