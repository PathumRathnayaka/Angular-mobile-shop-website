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
  featuredImage = 'assets/IphoneAir.jpg';
  featuredImageAlt = 'iPhone Air';
  featuredImageCaption = 'Featured: Latest iPhone 15 Pro Max';

  // Fallback to a data URI placeholder if image fails to load
  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    // Create a simple SVG placeholder as fallback
    img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRTVFN0VCIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzZCNzI4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPmlQaG9uZSBBaXI8L3RleHQ+PC9zdmc+';
    console.error('Failed to load image:', this.featuredImage);
  }
}