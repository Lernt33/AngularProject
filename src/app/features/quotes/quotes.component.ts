import {Component, inject, OnInit} from '@angular/core';
import {HttpService} from "@app-shared/services/http.service";
import {Quote} from "@app-shared/interfaces";
import {AlertService} from "@app-shared/services/alert.service";
import {QuoteCardComponent} from "@app-shared/ui/quote-card/quote-card.component";

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [
    QuoteCardComponent
  ],
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  service = inject(HttpService);
  alert = inject(AlertService);
  ALLquotes!: Quote[];
  Usednumber: number[] = [];
  QuotesToDisplay: Quote[] = [];

  ngOnInit() {
    this.ALLquotes = this.service.getALLQuotes();
    this.loadQuotesFromLocalStorage();
    console.log(this.ALLquotes);
  }

  Reset() {
    this.QuotesToDisplay = []
    this.saveQuotesToLocalStorage()
  }

  RandomQuote() {
      let rNumber: number;
      rNumber = Math.floor(Math.random() * this.ALLquotes.length);

      this.Usednumber.push(rNumber);
      this.QuotesToDisplay.unshift(this.ALLquotes[rNumber]);
      this.saveQuotesToLocalStorage();

  }

  private saveQuotesToLocalStorage() {
    localStorage.setItem('quotesToDisplay', JSON.stringify(this.QuotesToDisplay));
    localStorage.setItem('usedNumbers', JSON.stringify(this.Usednumber));
  }

  private loadQuotesFromLocalStorage() {
    const savedQuotes = localStorage.getItem('quotesToDisplay');
    const savedNumbers = localStorage.getItem('usedNumbers');

    if (savedQuotes) {
      this.QuotesToDisplay = JSON.parse(savedQuotes);
    }

    if (savedNumbers) {
      this.Usednumber = JSON.parse(savedNumbers);
    }
  }
}
