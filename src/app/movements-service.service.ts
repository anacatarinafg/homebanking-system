import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' 
})
export class MovementsService {
  movements: Movement[] = []; // array to store movement objects

  addMovement(movement: Movement) {
    this.movements.push(movement); // adds a movement object to the array
  }

  clearMovements() {
    this.movements = []; // clears the array of movements
  }
}

export interface Movement {
  type: string; // type of movement (e.g., deposit, withdrawal)
  amount: number; // amount of the movement
}