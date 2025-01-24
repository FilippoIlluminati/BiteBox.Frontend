import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  selectedPaymentMethod: PaymentMethod|any;

  selectPaymentMethod(type: PaymentMethod) {

    this.selectedPaymentMethod=type;

  }

  paymentMethodSelected() {

    console.log(this.selectedPaymentMethod)

  }

  formatCardNumber(event:any) {
    // Rimuovi tutti i caratteri non numerici
    let cardNumber = event.target.value.replace(/\D/g, '');
    
    // Formatta il numero con trattini ogni 4 cifre
    cardNumber = cardNumber.replace(/(\d{4})(?=\d)/g, '$1-');
    
    // Aggiorna il valore nell'input
    event.target.value = cardNumber;
  }

}

export enum PaymentMethod {

    VISA,

    MASTERCARD,

    GPAY,

    APPPAY,

    PAYPAL,

    AMAZONPAY

  }

  export class Cvv {
    numero: string = '';
  
    limitaInput(event: any) {
      if (event.target.value.length > 3) {
        event.target.value = event.target.value.slice(0, 3);
      }
    }
  }