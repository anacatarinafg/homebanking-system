import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OffersComponent } from './offers/offers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MobileAppComponent } from './mobile-app/mobile-app.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { MovementsComponent } from './movements/movements.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { MovementsService } from './movements-service.service';
import { BalanceService } from './balance-service.service';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    OffersComponent,
    DashboardComponent,
    LoginComponent,
    MobileAppComponent,
    PersonalDataComponent,
    MovementsComponent,
    DepositComponent,
    WithdrawComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    MovementsService, // provide the MovementsService globally within the app
    BalanceService, // // 
    UserService, // // 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }