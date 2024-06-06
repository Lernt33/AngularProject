import { AfterViewInit, Component, Input, OnInit, inject } from '@angular/core';
import { movie } from '@app-shared/interfaces';
import { HttpService } from '@app-shared/services/http.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-movie-page',
  standalone: true,
  imports: [],
  templateUrl: './movie-page.component.html',
  styleUrl: './movie-page.component.scss',
})
export class MoviePageComponent implements AfterViewInit {
  constructor(private sanitizer: DomSanitizer) {}
  service = inject(HttpService);
  id: number = 5;
  movie!: movie;

  getEmbedLink(youtubeLink: string): SafeResourceUrl {
    const videoId = youtubeLink.split('v=')[1];
    const embedLink = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedLink);
  }

  ngAfterViewInit(): void {
    this.movie = this.service.getFilmsbyId(this.id);
    console.log(this.movie);
  }
}
