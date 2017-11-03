import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cardhome',
   templateUrl: './cardhome.component.html',
   styleUrls: ['./cardhome.component.css']
})
export class CardhomeComponent {

 @Input() public carouselCard: string;

  constructor() {
  }


}
