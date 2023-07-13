import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar">
      <a routerLink="/" class="navbar__logotype">Homebanking</a>
      <ul class="navbar__list">
      <li class="navbar__item">
          <a routerLink="/dashboard" class="navbar__link">Dashboard</a>
        </li>
        <li class="navbar__item">
          <a routerLink="/offers" class="navbar__link">Offers</a>
        </li>
        <li class="navbar__item">
          <a routerLink="/mobile" class="navbar__link">Mobile</a>
        </li>
      </ul>
    </nav>
  `,
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {}
