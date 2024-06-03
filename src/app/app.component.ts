import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '@app-shared/ui/nav/nav.component';

import { FooterComponent } from './shared/ui/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, NavComponent, FooterComponent],
})
export class AppComponent {
  title = 'FinalProject';
}
