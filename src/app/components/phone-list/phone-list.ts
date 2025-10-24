import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneCardComponent, Phone } from '../phone-card/phone-card';

@Component({
  selector: 'app-phone-list',
  imports: [CommonModule, PhoneCardComponent],
  templateUrl: './phone-list.html',
  styleUrl: './phone-list.scss'
})
export class PhoneListComponent {
  phones: Phone[] = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      brand: 'Apple',
      price: 239990.00,
      image: 'assets/Iphone15pro.jpg',
      description: '6.7" OLED display, A17 Pro chip, 48MP camera with advanced AI features',
      colors: ['#000000', '#2c3e50', '#3498db', '#e74c3c'],
      rating: 4.9
    },
    {
      id: 2,
      name: 'Galaxy S24 Ultra',
      brand: 'Samsung',
      price: 289990.00,
      image: 'assets/GalaxyS24Ultra.png',
      description: '6.8" AMOLED display, Snapdragon 8 Gen 3, 200MP camera system',
      colors: ['#2c3e50', '#8e44ad', '#27ae60', '#c0392b'],
      rating: 4.8
    },
    {
      id: 3,
      name: 'Pixel 8 Pro',
      brand: 'Google',
      price: 189990.00,
      image: 'assets/Pixel8Pro.jpg',
      description: 'Google Tensor G3, 6.7" LTPO display, 50MP triple camera, best-in-class AI',
      colors: ['#34495e', '#95a5a6', '#3498db'],
      rating: 4.7
    },
    {
      id: 4,
      name: 'OnePlus 12',
      brand: 'OnePlus',
      price: 149990.00,
      image: 'assets/oneplus-12.png',
      description: 'Snapdragon 8 Gen 3, 6.7" AMOLED 120Hz, 5400mAh battery, 100W charging',
      colors: ['#000000', '#16a085', '#95a5a6'],
      rating: 4.6
    },
    {
      id: 5,
      name: 'Xiaomi 14 Pro',
      brand: 'Xiaomi',
      price: 169990.00,
      image: 'assets/Xiaomi 14 Pro.png',
      description: 'Leica camera system, 6.73" AMOLED display, 90W HyperCharge, premium build',
      colors: ['#2c3e50', '#ffffff', '#9b59b6'],
      rating: 4.5
    },
    {
      id: 6,
      name: 'Nothing Phone 2',
      brand: 'Nothing',
      price: 129990.00,
      image: 'assets/Nothing Phone 2.jpg',
      description: 'Unique Glyph interface, 6.7" LTPO display, Snapdragon 8+ Gen 1',
      colors: ['#ecf0f1', '#000000'],
      rating: 4.4
    }
  ];

  selectedCategory = 'all';
  categories = ['all', 'Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi', 'Nothing'];

  get filteredPhones() {
    if (this.selectedCategory === 'all') {
      return this.phones;
    }
    return this.phones.filter(phone => phone.brand === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
