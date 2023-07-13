import { Component } from '@angular/core';
import { MovementsService, Movement } from '../movements-service.service';
import { BalanceService } from '../balance-service.service';

@Component({
  selector: 'app-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.scss'],
})
export class MovementsComponent {
  movements: Movement[] = []; // array to store movement objects

  constructor(
    private movementsService: MovementsService,
    private balanceService: BalanceService
  ) {
    this.movements = this.movementsService.movements; // initialize the movements array with the movements from the service
  }

  getBalance(): number {
    return this.balanceService.getBalance(); // retrieve the current bal from the balance--service
  }

  clearMovements() {
    this.movementsService.clearMovements(); // clear the movements array in the MovementsService
    this.movements = []; // rset the local movements array
  }
}