import { Component, OnInit, inject } from '@angular/core';

import { HttpService } from '@app-shared/services/http.service';
import { movie } from '@app-shared/interfaces';
import { MovieComponent } from '@app-shared/ui/movie/movie.component';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { AlertService } from '@app-shared/services/alert.service';
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [MovieComponent, FormsModule],
})
export class HomeComponent implements OnInit {
  alert = inject(AlertService);
  service = inject(HttpService);
  public list!: Array<movie>;
  ngOnInit(): void {
    this.service.getFilms().subscribe((data: any) => (this.list = data));
    console.log(this.list);
  }
  onSubmit(form: NgForm) {
    console.log(form);
    if (!form.submitted) this.alert.fs_Alert('Thank you', 'success');
  }
}
