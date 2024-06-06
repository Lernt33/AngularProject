import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AlertService } from '@app-shared/services/alert.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export default class ContactComponent {
  alert = inject(AlertService);

  onSubmit(form: NgForm) {
    if (form.form.controls['email'].status == 'VALID' && !form.submitted) {
      this.alert.fs_Alert('Form submitted successfully', 'success');
      return;
    }
    this.alert.fs_Alert('Invalid form', 'error', 700);
  }
}
