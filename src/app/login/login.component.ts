import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  template: `
    <div class="login">
      <div class="login__wrapper">
        <div class="login__info">
          <h2 class="login__headline">Log in</h2>

          <!-- BUTTON TO ENTER WITH GOOGLE -->
          <button type="button" class="login__googleMethod">
            Log in with Google
          </button>
        </div>

        <!-- FORM -->
        <form
          method="get"
          action=""
          class="form"
          (ngSubmit)="submitForm()"
          #contactForm="ngForm"
        >
          <div>
            <label id="name">Name</label>
            <input
              type="name"
              id="name"
              placeholder="Enter your name..."
              [(ngModel)]="name"
              name="name"
              #nameInput="ngModel"
              required
            />
            <!-- bind the "name" variable to the input value using ngModel -->
            <div
              class="input__error"
              *ngIf="nameInput.invalid && nameInput.touched"
            >
              Your name is required.
            </div>
            <label id="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email..."
              [(ngModel)]="email"
              name="email"
              #emailInput="ngModel"
              required
            />
            <!-- bind the "email" variable to the input value using ngModel -->
            <div
              class="input__error"
              *ngIf="emailInput.invalid && emailInput.touched"
            >
              Your email is required.
            </div>

            <label id="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password..."
              [(ngModel)]="password"
              name="password"
              #passwordInput="ngModel"
              required
            />
            <!-- bind the "password" variable to the input value using ngModel -->
            <div
              class="input__error"
              *ngIf="passwordInput.invalid && passwordInput.touched"
            >
              Your password is required.
            </div>
          </div>

          <!--  -->
          <div>
            <a
              routerLink="/dashboard"
              class="form__login"
              (click)="submitForm()"
            >
              Log in
            </a>
          </div>
        </form>
      </div>
    </div>
  `,
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
  }

  submitForm() {
    this.userService.name = this.name; // set the name value in the UserService
    this.userService.email = this.email; // set the email value
    this.userService.password = this.password; // set the password value
  }
}
