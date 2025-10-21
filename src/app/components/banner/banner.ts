// src/app/components/banner/banner.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="banner">
      <div class="banner-content">
        <h1 class="banner-title">Find Your Perfect Phone</h1>
        <p class="banner-subtitle">Discover the latest smartphones with amazing features and deals</p>
        <div class="banner-buttons">
          <button class="btn-primary">Shop Now</button>
          <button class="btn-secondary">View Deals</button>
        </div>
      </div>
      <div class="banner-decoration">
        <div class="phone-icon">📱</div>
      </div>
    </div>
  `,
  styles: [`
    .banner {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 4rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-height: 400px;
      position: relative;
      overflow: hidden;
    }

    .banner::before {
      content: '';
      position: absolute;
      top: -50%;
      right: -10%;
      width: 500px;
      height: 500px;
      background: rgba(255,255,255,0.1);
      border-radius: 50%;
    }

    .banner-content {
      max-width: 600px;
      z-index: 1;
    }

    .banner-title {
      font-size: 3rem;
      margin: 0 0 1rem 0;
      font-weight: 700;
      line-height: 1.2;
    }

    .banner-subtitle {
      font-size: 1.2rem;
      margin: 0 0 2rem 0;
      opacity: 0.9;
    }

    .banner-buttons {
      display: flex;
      gap: 1rem;
    }

    .btn-primary, .btn-secondary {
      padding: 1rem 2rem;
      border: none;
      border-radius: 30px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.3s, box-shadow 0.3s;
    }

    .btn-primary {
      background: white;
      color: #667eea;
    }

    .btn-secondary {
      background: rgba(255,255,255,0.2);
      color: white;
      border: 2px solid white;
    }

    .btn-primary:hover, .btn-secondary:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }

    .banner-decoration {
      z-index: 1;
    }

    .phone-icon {
      font-size: 15rem;
      opacity: 0.3;
      animation: float 3s ease-in-out infinite;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }

    @media (max-width: 768px) {
      .banner {
        flex-direction: column;
        text-align: center;
        padding: 3rem 1.5rem;
      }

      .banner-title {
        font-size: 2rem;
      }

      .banner-buttons {
        justify-content: center;
        flex-wrap: wrap;
      }

      .phone-icon {
        font-size: 8rem;
      }
    }
  `]
})
export class BannerComponent {}
