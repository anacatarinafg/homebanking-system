import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <div class="home__wrapper">
      <div class="home">
        <div class="home__leftSide">
          <h2 class="home__headline">Let some elegance into your finance</h2>
          <p class="home__paragraph">
            Simplify your financial journey with us. Join today and experience
            hassie-free banking.
          </p>
          <button
            type="button"
            class="home__loginButton"
            (click)="redirectToOtherPage()"
          > <!-- call the 'redirectToOtherPage()' method when the button is clicked -->
            Go to my account
          </button>
        </div>
        <div class="home__rightSide">
          <img
            src="../../assets/credit-card-golden.webp"
            alt="credit-card"
            class="home__cardImage"
          />
          <img
            src="../../assets/credit-card-golden.webp"
            alt="credit-card"
            class="home__cardImage--2"
          />
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  redirectToOtherPage(): void {
    this.router.navigate(['/login']); // navigate to the '/login' route when the button is clicked
  }
}
