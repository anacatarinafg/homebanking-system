import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-personal-data',
  template: `
    <div class="data">
      <h2 class="data__headline">Welcome back, {{ name }}!</h2>
      <img src="../../assets/person.jpg" alt="person" class="data__image" />
      <div class="data__inputs">
        <!-- Input for Name -->
        <label class="data__label"
          >Name
          <input
            type="text"
            class="data__input"
            [(ngModel)]="name"
            [disabled]="!isEditing"
            [style.cursor]="isEditing ? 'text' : 'not-allowed'"
          />
        </label>
        <!-- Input for Email -->
        <label class="data__label"
          >Email
          <input
            type="text"
            class="data__input"
            [(ngModel)]="email"
            [disabled]="!isEditing"
            [style.cursor]="isEditing ? 'text' : 'not-allowed'"
        /></label>
        <!-- Input for Password -->
        <label class="data__label"
          >Password
          <input
            type="password"
            class="data__input"
            [(ngModel)]="password"
            [disabled]="!isEditing"
            [style.cursor]="isEditing ? 'text' : 'not-allowed'"
        /></label>
      </div>
      <div class="data__editProfile">
        <!-- Edit profile button -->
        <button class="data__button" (click)="toggleEditing()">
          {{ isEditing ? 'Save' : 'Edit profile' }}
        </button>
        <!-- Leave link -->
        <a routerLink="/login" class="data__button">Leave</a>
      </div>
    </div>
  `,
  styleUrls: ['./personal-data.component.scss'],
})
export class PersonalDataComponent {
  name: string = 'Pedro Guimarães';
  email: string = 'example@gmail.com';
  password: string = '*****';
  isEditing: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.name = this.userService.name; // get the name value from the UserService
    this.email = this.userService.email; // get the email value from the
    this.password = this.userService.password; // get the password value
  }

  // Method to toggle the editing state
  toggleEditing() {
    this.isEditing = !this.isEditing;
  }
}
