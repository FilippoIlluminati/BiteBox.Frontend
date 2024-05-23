import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  slides = [
    { image: './assets/slide3.jpeg', caption: 'First Slide' },
    { image: './assets/slide2.jpeg', caption: 'Second Slide' }
  ];

}
