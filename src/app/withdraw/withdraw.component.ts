import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MovementsService, Movement } from '../movements-service.service';
import { BalanceService } from '../balance-service.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent {
  formWithdraw!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private movementsService: MovementsService,
    private balanceService: BalanceService
  ) {}

  ngOnInit() {
    this.formWithdraw = this.formBuilder.group({
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
    return this.balanceService.getBalance(); // retrieve the current balance from the balance---service
  }

  withdraw() {
    const withdrawAmount = this.formWithdraw.value.quantity; // get the withdrawal amount from the form
    this.balanceService.updateBalance(-withdrawAmount); // update the balance by subtracting the withdrawal amount
    this.movementsService.addMovement({ type: 'Withdrawal', amount: -withdrawAmount }); // add a movement indicating the withdrawal
    this.formWithdraw.reset(); // reset the form after the withdrawal is processed
  }
}