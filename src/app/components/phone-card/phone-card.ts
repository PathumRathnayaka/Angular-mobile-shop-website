// src/app/components/phone-card/phone-card.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Phone {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  rating: number;
  specs: string[];
}

@Component({
  selector: 'app-phone-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="phone-card">
      <div class="phone-image">
        <img [src]="phone.image" [alt]="phone.name">
        <span class="badge">New</span>
      </div>
      <div class="phone-details">
        <span class="brand">{{ phone.brand }}</span>
        <h3 class="phone-name">{{ phone.name }}</h3>
        <div class="rating">
          <span *ngFor="let star of [1,2,3,4,5]" class="star">
            {{ star <= phone.rating ? '⭐' : '☆' }}
          </span>
          <span class="rating-text">({{ phone.rating }})</span>
        </div>
        <div class="specs">
          <span *ngFor="let spec of phone.specs" class="spec-tag">{{ spec }}</span>
        </div>
        <div class="price-section">
          <span class="price">\${{ phone.price }}</span>
          <button class="add-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .phone-card {
      background: white;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      transition: transform 0.3s, box-shadow 0.3s;
      cursor: pointer;
    }

    .phone-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.15);
    }

    .phone-image {
      position: relative;
      height: 250px;
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .phone-image img {
      max-width: 80%;
      max-height: 80%;
      object-fit: contain;
    }

    .badge {
      position: absolute;
      top: 10px;
      right: 10px;
      background: #ff4757;
      color: white;
      padding: 0.3rem 0.8rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
    }

    .phone-details {
      padding: 1.5rem;
    }

    .brand {
      color: #667eea;
      font-size: 0.9rem;
      font-weight: 600;
      text-transform: uppercase;
    }

    .phone-name {
      margin: 0.5rem 0;
      font-size: 1.2rem;
      color: #2c3e50;
    }

    .rating {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      margin: 0.5rem 0;
    }

    .star {
      font-size: 1rem;
    }

    .rating-text {
      color: #7f8c8d;
      font-size: 0.9rem;
      margin-left: 0.3rem;
    }

    .specs {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin: 1rem 0;
    }

    .spec-tag {
      background: #ecf0f1;
      padding: 0.3rem 0.8rem;
      border-radius: 15px;
      font-size: 0.8rem;
      color: #34495e;
    }

    .price-section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid #ecf0f1;
    }

    .price {
      font-size: 1.5rem;
      font-weight: 700;
      color: #667eea;
    }

    .add-cart {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      padding: 0.7rem 1.5rem;
      border-radius: 25px;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s;
    }

    .add-cart:hover {
      transform: scale(1.05);
    }
  `]
})
export class PhoneCardComponent {
  @Input() phone!: Phone;
}
