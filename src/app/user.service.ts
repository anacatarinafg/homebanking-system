import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor() {}
}