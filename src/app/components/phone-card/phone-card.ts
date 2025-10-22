import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Phone {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  specs: {
    display: string;
    processor: string;
    ram: string;
    storage: string;
    camera: string;
    battery: string;
  };
  colors: string[];
  rating: number;
}

@Component({
  selector: 'app-phone-card',
  imports: [CommonModule],
  templateUrl: './phone-card.component.html',
  styleUrl: './phone-card.component.scss'
})
export class PhoneCardComponent {
  @Input() phone!: Phone;
  
  selectedColor = 0;

  selectColor(index: number) {
    this.selectedColor = index;
  }
}