import { AfterViewInit, Component, Input, OnInit, inject } from '@angular/core';
import { movie } from '@app-shared/interfaces';
import { HttpService } from '@app-shared/services/http.service';

@Component({
  selector: 'app-movie-page',
  standalone: true,
  imports: [],
  templateUrl: './movie-page.component.html',
  styleUrl: './movie-page.component.scss',
})
export class MoviePageComponent implements AfterViewInit {
  service = inject(HttpService);
  id: string = '0';
  ngAfterViewInit(): void {
    console.log(this.service.getFilmsbyId(5));
  }
}
