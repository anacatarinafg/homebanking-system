import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MovementsService, Movement } from '../movements-service.service';
import { BalanceService } from '../balance-service.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss'],
})
export class DepositComponent {
  formDeposit!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private movementsService: MovementsService,
    private balanceService: BalanceService
  ) {}

  ngOnInit() {
    this.formDeposit = this.formBuilder.group({
      quantity: ['', [Validators.required, Validators.min(0), this.validateMaxAmount]],
    });
  }

  validateMaxAmount(control: AbstractControl) {
    const maxAmount = 10000;
    if (control.value > maxAmount) {
      return { max: true }; // return an error object if the value exceeds the maximum amount
    }
    return null; // return null if the validation passes
  }

  get balance(): number {
    return this.balanceService.getBalance(); // retrieve the current balance from the BalanceService
  }

  deposit() {
    const depositedAmount = this.formDeposit.value.quantity; // get the deposited amount from the form
    this.balanceService.updateBalance(depositedAmount); // update the balance by adding the deposited amount
    this.movementsService.addMovement({ type: 'Deposit', amount: depositedAmount }); // add a movement indicating the deposit
    this.formDeposit.reset(); // reset the form after the deposit is processed
  }
}