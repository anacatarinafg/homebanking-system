import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="dashboard__wrapper">
      <div class="dashboard">
        <div class="dashboard__headlines">
          <div class="dashboard__linksBox">
            <a routerLink="/dashboard/personal-data" class="dashboard__link"
              >Personal data</a
            >
          </div>
          <div class="dashboard__linksBox">
            <a routerLink="/dashboard/movements" class="dashboard__link">Movements</a> 
          </div>
          <div class="dashboard__linksBox">
            <a routerLink="/dashboard/deposit" class="dashboard__link">Deposit</a> 
          </div>
          <div class="dashboard__linksBox">
            <a routerLink="/dashboard/withdraw" class="dashboard__link">Withdraw</a> 
          </div>
        </div>
        <div class="dashboard__info">
          <div class="dashboard__infoDetails">
            <router-outlet></router-outlet> <!-- placeholder for the dynamically loaded component based on the route -->
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {}