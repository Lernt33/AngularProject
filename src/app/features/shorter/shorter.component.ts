import { AfterViewChecked, Component, OnInit, inject } from '@angular/core';
import { HttpService } from '@app-shared/services/http.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shorter',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './shorter.component.html',
  styleUrl: './shorter.component.scss',
})
export default class ShorterComponent implements OnInit {
  service = inject(HttpService);
  public list!: string[];
  ngOnInit() {
    if (!this.list) {
      this.list = this.service.getnames();
    }
  }
}
