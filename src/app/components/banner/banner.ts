import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  imports: [CommonModule],
  templateUrl: './banner.html',
  styleUrl: './banner.scss'
})
export class BannerComponent {
  // Image should be placed in public/assets/ folder
  featuredImage = 'assets/IphoneAir.png';
  featuredImageAlt = 'iPhone Air';
  featuredImageCaption = 'Featured: Latest iPhone 15 Pro Max';

  // Fallback to a placeholder if image fails to load
  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = 'https://via.placeholder.com/400x400/E5E7EB/6B7280?text=iPhone+Air';
    console.error('Failed to load image:', this.featuredImage);
  }
}