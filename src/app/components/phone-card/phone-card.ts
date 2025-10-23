import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Phone {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  description: string;
  colors: string[];
  rating: number;
}

@Component({
  selector: 'app-phone-card',
  imports: [CommonModule],
  templateUrl: './phone-card.html',
  styleUrl: './phone-card.scss'
})
export class PhoneCardComponent {
  @Input() phone!: Phone;
  
  selectedColor = 0;

  selectColor(index: number) {
    this.selectedColor = index;
  }

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRTVFN0VCIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzZCNzI4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk1vYmlsZTwvdGV4dD48L3N2Zz4=';
    console.error('Failed to load phone image:', this.phone.image);
  }
}