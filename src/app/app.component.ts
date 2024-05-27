import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '@app-shared/ui/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, NavComponent],
})
export class AppComponent {
  title = 'FinalProject';
}
