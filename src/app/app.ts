import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { VideoSectionComponent } from './components/video-section/video-section';
import { BannerComponent } from './components/banner/banner';
import { PhoneListComponent } from './components/phone-list/phone-list';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    NavbarComponent, 
    HeroComponent, 
    VideoSectionComponent,
    BannerComponent, 
    PhoneListComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ng-tw-4-app');
}