import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

type iconT = 'success' | 'error' | 'warning' | 'info' | 'question' | undefined;

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor() {}
  fs_Alert(title: string, icon: iconT, timer: number = 2000) {
    Swal.fire({
      title: title,
      icon: icon,
      timer: timer,
    });
  }
}
