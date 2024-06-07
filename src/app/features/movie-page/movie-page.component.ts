import {Component, OnInit, inject} from '@angular/core';
import {movie} from '@app-shared/interfaces';
import {HttpService} from '@app-shared/services/http.service';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {ActivatedRoute,Router } from "@angular/router";


@Component({
  selector: 'app-movie-page',
  standalone: true,
  imports: [],
  templateUrl: './movie-page.component.html',
  styleUrl: './movie-page.component.scss',
})
export class MoviePageComponent implements OnInit {
  service = inject(HttpService);
  movie!: movie;
  id: number

  constructor(private sanitizer: DomSanitizer, private route: ActivatedRoute,private router: Router) {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
  }

  getEmbedLink(youtubeLink: string): SafeResourceUrl {
    const videoId = youtubeLink.split('v=')[1];
    const embedLink = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedLink);
  }

  ngOnInit(): void {
    this.movie = this.service.getFilmsbyId(this.id);
    if(!this.movie){
      this.router.navigate(['404'])
    }
  }
}
