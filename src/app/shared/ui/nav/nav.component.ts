import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  title = 'mass|records';
  public sidebaropened: boolean = false;
  header = 'assets/imgs/fc7570_24323e7a91004da9b2a3b6472b07c036~mv2.png';
  public button: string = 'assets/svgs/list.svg';

  switch() {
    this.header = 'assets/imgs/fc7570_4af2d8a34d6f4916991f7f6b85fc2922~mv2.png';
  }
  switchback() {
    this.header = 'assets/imgs/fc7570_24323e7a91004da9b2a3b6472b07c036~mv2.png';
  }
  sidebar() {
    this.sidebaropened = !this.sidebaropened;
    this.button = !this.sidebaropened
      ? 'assets/svgs/list.svg'
      : 'assets/svgs/close.svg';
  }
}
