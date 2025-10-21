// src/app/components/phone-list/phone-list.component.ts
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneCardComponent, Phone } from '../phone-card/phone-card.component';

@Component({
  selector: 'app-phone-list',
  standalone: true,
  imports: [CommonModule, PhoneCardComponent],
  template: `
    <div class="phone-list-container">
      <div class="section-header">
        <h2>Featured Smartphones</h2>
        <p>Explore our collection of the latest mobile phones</p>
      </div>

      <div class="filters">
        <button
          *ngFor="let brand of brands()"
          [class.active]="selectedBrand() === brand"
          (click)="filterByBrand(brand)"
          class="filter-btn">
          {{ brand }}
        </button>
      </div>

      <div class="phone-grid">
        <app-phone-card
          *ngFor="let phone of filteredPhones()"
          [phone]="phone">
        </app-phone-card>
      </div>
    </div>
  `,
  styles: [`
    .phone-list-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 3rem 2rem;
    }

    .section-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .section-header h2 {
      font-size: 2.5rem;
      color: #2c3e50;
      margin: 0 0 0.5rem 0;
    }

    .section-header p {
      font-size: 1.1rem;
      color: #7f8c8d;
      margin: 0;
    }

    .filters {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 2rem;
      flex-wrap: wrap;
    }

    .filter-btn {
      padding: 0.7rem 1.5rem;
      border: 2px solid #ecf0f1;
      background: white;
      border-radius: 25px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
      color: #34495e;
    }

    .filter-btn:hover {
      border-color: #667eea;
      color: #667eea;
    }

    .filter-btn.active {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-color: transparent;
    }

    .phone-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 2rem;
    }

    @media (max-width: 768px) {
      .phone-list-container {
        padding: 2rem 1rem;
      }

      .section-header h2 {
        font-size: 2rem;
      }

      .phone-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class PhoneListComponent {
  phones = signal<Phone[]>([
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      brand: 'Apple',
      price: 1199,
      image: 'https://images.unsplash.com/photo-1592286927505-edfe1358bd7f?w=400',
      rating: 5,
      specs: ['A17 Pro', '256GB', '48MP']
    },
    {
      id: 2,
      name: 'Galaxy S24 Ultra',
      brand: 'Samsung',
      price: 1299,
      image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400',
      rating: 5,
      specs: ['Snapdragon 8 Gen 3', '512GB', '200MP']
    },
    {
      id: 3,
      name: 'Pixel 8 Pro',
      brand: 'Google',
      price: 999,
      image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400',
      rating: 4,
      specs: ['Tensor G3', '256GB', '50MP']
    },
    {
      id: 4,
      name: 'OnePlus 12',
      brand: 'OnePlus',
      price: 799,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
      rating: 4,
      specs: ['Snapdragon 8 Gen 3', '256GB', '50MP']
    },
    {
      id: 5,
      name: 'Xiaomi 14 Pro',
      brand: 'Xiaomi',
      price: 899,
      image: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=400',
      rating: 4,
      specs: ['Snapdragon 8 Gen 3', '512GB', '50MP']
    },
    {
      id: 6,
      name: 'iPhone 15',
      brand: 'Apple',
      price: 799,
      image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400',
      rating: 5,
      specs: ['A16 Bionic', '128GB', '48MP']
    }
  ]);

  brands = signal<string[]>(['All', 'Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi']);
  selectedBrand = signal<string>('All');
  filteredPhones = signal<Phone[]>(this.phones());

  filterByBrand(brand: string) {
    this.selectedBrand.set(brand);
    if (brand === 'All') {
      this.filteredPhones.set(this.phones());
    } else {
      this.filteredPhones.set(this.phones().filter(phone => phone.brand === brand));
    }
  }
}
