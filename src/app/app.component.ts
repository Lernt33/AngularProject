import {Component, OnInit} from '@angular/core';
import { RouterOutlet,Router, NavigationEnd } from '@angular/router';
import { NavComponent } from '@app-shared/ui/nav/nav.component';
import { FooterComponent } from './shared/ui/footer/footer.component';
import { MoviePageComponent } from './features/movie-page/movie-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, NavComponent, FooterComponent, MoviePageComponent],
})
export class AppComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }
}
