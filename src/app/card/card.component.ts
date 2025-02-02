import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() imageSrc: string = ''; // URL dell'immagine
  @Input() title: string = '';    // Titolo della card
  @Input() description: string = ''; // Descrizione della card
}
