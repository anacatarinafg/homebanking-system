import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { MovementsComponent } from './movements/movements.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { MobileAppComponent } from './mobile-app/mobile-app.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, // route to the HomeComponent
  { path: 'login', component: LoginComponent }, // route to the LoginComponent

  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'personal-data', pathMatch: 'full' }, // dfault child route, redirects to PersonalDataComponent
      { path: 'personal-data', component: PersonalDataComponent }, // route to the PersonalDataComponent
      { path: 'movements', component: MovementsComponent }, // route to the MovementsComponent
      { path: 'deposit', component: DepositComponent }, // route to the DepositComponent
      { path: 'withdraw', component: WithdrawComponent }, // route to the WithdrawComponent
    ],
  },
  { path: 'offers', component: OffersComponent }, // route to the OffersComponent
  { path: 'mobile', component: MobileAppComponent }, // route to the MobileAppComponent
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // default route, redirects to HomeComponent
  { path: '**', redirectTo: '/home' }, // wildcard route, redirects to HomeComponent for any other unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}