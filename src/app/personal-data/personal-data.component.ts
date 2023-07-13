import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-data',
  template: ` 
  <div class="data">
    <h2 class="data__headline">Welcome back!</h2>
    <img src="../../assets/person.jpg" alt="person" class="data__image" /> 
    <div class="data__inputs">
    <label class="data__label">Name
      <input type="text" class="data__input" placeholder="Pedro Guimarães" disabled/></label> 
      <label class="data__label">Email
      <input type="text" class="data__input" placeholder="example@gmail.com" disabled/></label> 
      <label class="data__label">Password
      <input type="text" class="data__input" placeholder="*****" disabled/></label> 
    </div>
    <div class="data__editProfile">
      <button class="data__button">Edit profile</button> 
      <a routerLink="/login" class="data__button">Leave</a> 
    </div>
  </div>
  
  `,
  styleUrls: ['./personal-data.component.scss'],
})
export class PersonalDataComponent {}