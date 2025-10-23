import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  imports: [CommonModule],
  templateUrl: './banner.html',
  styleUrl: './banner.scss'
})
export class BannerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('bannerVideo') bannerVideo!: ElementRef<HTMLVideoElement>;
  @ViewChild('bannerSection') bannerSection!: ElementRef<HTMLElement>;

  // Video file should be placed in public/assets/ folder
  videoSource = 'assets/video.mp4';
  isPlaying = false;
  private observer?: IntersectionObserver;

  ngAfterViewInit() {
    // Set up Intersection Observer to detect when banner is in viewport
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const video = this.bannerVideo.nativeElement;

          if (entry.isIntersecting) {
            // Banner is visible, play video
            video.muted = true; // Ensure video is muted
            video.play().then(() => {
              this.isPlaying = true;
              console.log('Banner video started playing (muted)');
            }).catch(error => {
              console.log('Failed to play video:', error);
              this.isPlaying = false;
            });
          } else {
            // Banner is not visible, pause video
            video.pause();
            this.isPlaying = false;
          }
        });
      },
      {
        threshold: 0.5, // Video starts when 50% of banner is visible
        rootMargin: '0px'
      }
    );

    // Start observing the banner section
    if (this.bannerSection) {
      this.observer.observe(this.bannerSection.nativeElement);
    }
  }

  ngOnDestroy() {
    // Clean up observer when component is destroyed
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  onVideoError(event: Event) {
    console.error('Video failed to load:', this.videoSource);
    this.isPlaying = false;
  }

  onVideoLoaded(event: Event) {
    console.log('Banner video loaded successfully');
  }
}
