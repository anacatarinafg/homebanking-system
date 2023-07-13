import { Component } from '@angular/core';

@Component({
  selector: 'app-offers',
  template: `
    <div class="offers__wrapper">
      <div class="offers__info">
        <h2 class="offers__headline">Pricing plans for every need</h2>
        <p class="offers__paragraph">
          The most affordable options in the market.
        </p>
      </div>
      <div class="offers__plans">
        <!-- REPEAT for other plan options -->
        <div class="offers__plan">
          <h4 class="offers__planOffer">Standard</h4>
          <span class="offers__planInfo">Lorem ipsum dolor sit amet.</span>
          <span class="offers__planPrice">$ 2,500</span>
          <hr>
          <ul class="offers__planList">
            <li class="offers__planItem">Social Media Marketing</li>
            <li class="offers__planItem">Social Media Marketing</li>
            <li class="offers__planItem">Social Media Marketing</li>
            <li class="offers__planItem">Social Media Marketing</li>
            <li class="offers__planItem">Social Media Marketing</li>
            <li class="offers__planItem">Social Media Marketing</li>
            <li class="offers__planItem">Social Media Marketing</li>
          </ul>
        </div>
        <!-- REPEAT for other plan options -->
        <div class="offers__plan">
          <h4 class="offers__planOffer">Premium</h4>
          <span class="offers__planInfo">Lorem ipsum dolor sit amet.</span>
          <span class="offers__planPrice">$ 5,500</span>
          <hr>
          <ul class="offers__planList">
            <li class="offers__planItem">Social Media Marketing</li>
            <li class="offers__planItem">Social Media Marketing</li>
            <li class="offers__planItem">Social Media Marketing</li>
            <li class="offers__planItem">Social Media Marketing</li>
            <li class="offers__planItem">Social Media Marketing</li>
            <li class="offers__planItem">Social Media Marketing</li>
            <li class="offers__planItem">Social Media Marketing</li>
            <li class="offers__planItem">Social Media Marketing</li>
            <li class="offers__planItem">Social Media Marketing</li>
            <li class="offers__planItem">Social Media Marketing</li>
          </ul>
        </div>
        <!-- REPEAT for other plan options -->
        <div class="offers__plan">
          <h4 class="offers__planOffer">Deluxe</h4>
          <span class="offers__planInfo">Lorem ipsum dolor sit amet.</span>
          <span class="offers__planPrice">$ 12,500</span>
          <hr>
          <ul class="offers__planList">
            <li class="offers__planItem">Social Media Marketing</li>
            <li class="offers__planItem">Social Media Marketing</li>
            <li class="offers__planItem">Social Media Marketing</li>
            <li class="offers__planItem">Social Media Marketing</li>
            <li class="offers__planItem">Social Media Marketing</li>
            <li class="offers__planItem">Social Media Marketing</li>
            <li class="offers__planItem">Social Media Marketing</li>
            <li class="offers__planItem">Social Media Marketing</li>
            <li class="offers__planItem">Social Media Marketing</li>
            <li class="offers__planItem">Social Media Marketing</li>
            <li class="offers__planItem">Social Media Marketing</li>
            <li class="offers__planItem">Social Media Marketing</li>
            <li class="offers__planItem">Social Media Marketing</li>
            <li class="offers__planItem">Social Media Marketing</li>
            
          </ul>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent {}
