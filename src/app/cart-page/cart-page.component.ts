import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {
  formatCardNumber(event: any): void {
    // Rimuovi tutti i caratteri non numerici e formatta il numero con trattini ogni 4 cifre
    let cardNumber = event.target.value.replace(/\D/g, '');
    cardNumber = cardNumber.replace(/(\d{4})(?=\d)/g, '$1-');
    event.target.value = cardNumber;
  }
}

export class Cvv {
  numero: string = '';

  limitaInput(event: any): void {
    if (event.target.value.length > 3) {
      event.target.value = event.target.value.slice(0, 3);
    }
  }
}
