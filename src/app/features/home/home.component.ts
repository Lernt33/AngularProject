import {Component, OnInit, inject, ViewChild, ElementRef, AfterViewInit, AfterViewChecked} from '@angular/core';

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
export default class HomeComponent implements AfterViewChecked {
  emailInput:string=''
  placeholder:string='Enter your email here*'
  alert = inject(AlertService);
  service = inject(HttpService);
  public list!: Array<movie>;
  ngAfterViewChecked(): void {
    this.list = this.service.getFilms();
  }

  onSubmit(form: NgForm) {
    if (form.form.controls['email'].status=="VALID" && !form.submitted) this.alert.fs_Alert('Thank you', 'success');
    this.emailInput=''
    this.placeholder='Thank you!'
  }

}
