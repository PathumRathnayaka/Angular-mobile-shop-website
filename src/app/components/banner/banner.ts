import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  imports: [CommonModule],
  templateUrl: './banner.html',
  styleUrl: './banner.scss'
})
export class BannerComponent implements AfterViewInit {
  @ViewChild('bannerVideo') bannerVideo!: ElementRef<HTMLVideoElement>;

  // Video file should be placed in public/assets/ folder
  videoSource = 'assets/video.mp4';
  isPlaying = true;

  ngAfterViewInit() {
    // Ensure video plays on load
    const video = this.bannerVideo.nativeElement;
    video.muted = true; // Muted autoplay is more widely supported

    // Try to play the video
    video.play().then(() => {
      this.isPlaying = true;
      console.log('Banner video started playing');
    }).catch(error => {
      console.log('Autoplay was prevented:', error);
      this.isPlaying = false;
    });
  }

  onVideoError(event: Event) {
    console.error('Video failed to load:', this.videoSource);
    this.isPlaying = false;
  }

  onVideoLoaded(event: Event) {
    console.log('Banner video loaded successfully');
  }
}
