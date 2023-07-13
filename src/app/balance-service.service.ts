import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {
  private balance: number = 144500; // private property to store the balance

  getBalance(): number {
    return this.balance; // returns the current bal
  }

  updateBalance(amount: number) {
    this.balance += amount; // updates the balance by adding the specified amount
  }
}