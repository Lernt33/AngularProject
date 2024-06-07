import {Component, OnInit, inject} from '@angular/core';
import {movie} from '@app-shared/interfaces';
import {HttpService} from '@app-shared/services/http.service';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {ActivatedRoute, Router} from "@angular/router";
import {DatePipe} from "@angular/common";
import {AlertService} from "@app-shared/services/alert.service";
import {TicketStorageService} from "@app-shared/services/tickets.service";


@Component({
  selector: 'app-movie-page',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './movie-page.component.html',
  styleUrl: './movie-page.component.scss',
})
export class MoviePageComponent implements OnInit {
  service = inject(HttpService);
  alert = inject(AlertService)
  ticketservice = inject(TicketStorageService)
  movie!: movie;
  id: number

  constructor(private sanitizer: DomSanitizer, private route: ActivatedRoute, private router: Router) {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
  }

  getEmbedLink(youtubeLink: string): SafeResourceUrl {
    const videoId = youtubeLink.split('v=')[1];
    const embedLink = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedLink);
  }

  ngOnInit(): void {
    this.movie = this.service.getFilmsbyId(this.id);
    if (!this.movie) {
      this.router.navigate(['404'])
    }
    console.log(this.movie)
  }

  OnReserveClick(item: any, moviename: string) {
    console.log(item)
    const name = moviename
    const date = item.id.split('/')[1]
    const time = item.id.split('/')[2]
    const lang = item.lang
    const prices = item.prices
    const object = {name: name, date: date, time: time, lang: lang, prices: prices}
    const objectString = JSON.stringify(object);
    console.log(this.ticketservice.ticketsValue$.some(ticket => JSON.stringify(ticket) === objectString));
    if (!this.ticketservice.ticketsValue$.some(ticket => JSON.stringify(ticket) === objectString)) {
      this.ticketservice.addTicket(object);
      this.alert.fs_Alert('Succesfully',"success",700)
      return;
    }
    this.alert.fs_Alert('Already added', 'error');
    console.log(this.ticketservice.tickets$);
  }
}
