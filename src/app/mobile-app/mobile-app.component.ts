import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-app',
  template: `
    <div class="mobile__wrapper">
      <div class="mobile__leftSide">
        <!-- HEADLINE AND LINK TO MOBILE APP -->
        <div class="mobile__info">
          <h2 class="mobile__headline">
            Empowering your digital banking experience with our mobile application
          </h2>
          <p class="mobile__paragraph">
            We focus on prividing innovate and user-friendly digital banking
            services to empower our customers. Join our app now for a better user experience.
          </p>
          <a routerLink="/mobile" class="mobile__link"
            >See the app on Play Store</a
          >
        </div>
        <!-- PEOPLE HAPPY WITH THE APP -->
        <div class="mobile__people">
          <div class="mobile__happyPeople">
            <span class="mobile__span span__number">10M</span>
            <span class="mobile__span">Happy and satisfied clients</span>
          </div>
          <div class="mobile__business">
            <span class="mobile__span span__number">25M</span>
            <span class="mobile__span">Businesses have already joined us!</span>
          </div>
          <div class="mobile__best">
            <span class="mobile__span span__number">No.1</span>
            <span class="mobile__span">Best finance company</span>
          </div>
        </div>
      </div>

      <div class="mobile__rightSide">
        <!-- DIV WITH PHOTO -->
        <div class="mobile__imageBox">
          <img
            src="../../assets/ca.png"
            alt="smartphone"
            class="mobile__image"
          />
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./mobile-app.component.scss'],
})
export class MobileAppComponent {}
