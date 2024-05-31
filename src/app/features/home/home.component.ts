import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { HttpService } from '@app-shared/services/http.service';
import { movie } from '@app-shared/interfaces';
import { MovieComponent } from '@app-shared/ui/movie/movie.component';
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [MovieComponent],
})
export class HomeComponent implements OnInit {
  service = inject(HttpService);
  public list!: Array<movie>;
  public clicks: number = 0;
  ngOnInit(): void {
    this.service.getFilms().subscribe((data: any) => (this.list = data));
    console.log(this.list);
  }
  clickedOnInput() {
    this.clicks += 1;
  }
}
