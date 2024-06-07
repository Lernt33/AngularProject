import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { movie } from '@app-shared/interfaces';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss',
})
export class MovieComponent {
  @Input() id!:number
  @Input() details!: movie;
  @ViewChild('image') Image!: ElementRef;
  @ViewChild('title') Title!: ElementRef;
  mouseover(event: Event) {
    this.Image.nativeElement.style.display = 'none';
  }
  mouseout(event: Event) {
    this.Image.nativeElement.style.display = 'block';
  }
}
