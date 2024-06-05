import {AfterViewChecked, Component, inject} from '@angular/core';
import {HttpService} from "@app-shared/services/http.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-shorter',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './shorter.component.html',
  styleUrl: './shorter.component.scss'
})
export default class ShorterComponent implements AfterViewChecked{
  service = inject(HttpService);
  public list!: string[];
  ngAfterViewChecked() {
    this.list = this.service.getnames()
  }
}
