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
      price: 1199,
      image: 'assets/Iphone15pro.jpg',
      specs: {
        display: '6.7" OLED',
        processor: 'A17 Pro',
        ram: '8GB',
        storage: '256GB',
        camera: '48MP',
        battery: '4422mAh'
      },
      colors: ['#000000', '#2c3e50', '#3498db', '#e74c3c'],
      rating: 4.9
    },
    {
      id: 2,
      name: 'Galaxy S24 Ultra',
      brand: 'Samsung',
      price: 1299,
      image: 'assets/GalaxyS24Ultra.png',
      specs: {
        display: '6.8" AMOLED',
        processor: 'Snapdragon 8 Gen 3',
        ram: '12GB',
        storage: '512GB',
        camera: '200MP',
        battery: '5000mAh'
      },
      colors: ['#2c3e50', '#8e44ad', '#27ae60', '#c0392b'],
      rating: 4.8
    },
    {
      id: 3,
      name: 'Pixel 8 Pro',
      brand: 'Google',
      price: 999,
      image: 'assets/Pixel8Pro.jpg',
      specs: {
        display: '6.7" LTPO',
        processor: 'Tensor G3',
        ram: '12GB',
        storage: '256GB',
        camera: '50MP',
        battery: '5050mAh'
      },
      colors: ['#34495e', '#95a5a6', '#3498db'],
      rating: 4.7
    },
    {
      id: 4,
      name: 'OnePlus 12',
      brand: 'OnePlus',
      price: 799,
      image: 'assets/oneplus-12.png',
      specs: {
        display: '6.7" AMOLED',
        processor: 'Snapdragon 8 Gen 3',
        ram: '16GB',
        storage: '512GB',
        camera: '50MP',
        battery: '5400mAh'
      },
      colors: ['#000000', '#16a085', '#95a5a6'],
      rating: 4.6
    },
    {
      id: 5,
      name: 'Xiaomi 14 Pro',
      brand: 'Xiaomi',
      price: 899,
      image: 'assets/Xiaomi 14 Pro.png',
      specs: {
        display: '6.73" AMOLED',
        processor: 'Snapdragon 8 Gen 3',
        ram: '12GB',
        storage: '256GB',
        camera: '50MP',
        battery: '4880mAh'
      },
      colors: ['#2c3e50', '#ffffff', '#9b59b6'],
      rating: 4.5
    },
    {
      id: 6,
      name: 'Nothing Phone 2',
      brand: 'Nothing',
      price: 699,
      image: 'assets/Nothing Phone 2.jpg',
      specs: {
        display: '6.7" LTPO',
        processor: 'Snapdragon 8+ Gen 1',
        ram: '12GB',
        storage: '256GB',
        camera: '50MP',
        battery: '4700mAh'
      },
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