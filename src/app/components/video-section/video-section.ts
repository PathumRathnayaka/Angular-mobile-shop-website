import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video-section',
  imports: [CommonModule],
  templateUrl: './video-section.html',
  styleUrl: './video-section.scss'
})
export class VideoSectionComponent implements AfterViewInit {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  
  // Video file is located in public/assets/ folder
  videoSource = 'assets/your-video.mp4.mp4';
  isPlaying = true;
  
  ngAfterViewInit() {
    // Ensure video plays on load (some browsers may block autoplay)
    const video = this.videoPlayer.nativeElement;
    video.muted = true; // Muted autoplay is more widely supported
    
    // Try to play the video
    video.play().then(() => {
      this.isPlaying = true;
      console.log('Video started playing');
    }).catch(error => {
      console.log('Autoplay was prevented:', error);
      this.isPlaying = false;
    });
    
    // Listen for play/pause events to update state
    video.addEventListener('play', () => this.isPlaying = true);
    video.addEventListener('pause', () => this.isPlaying = false);
  }

  onVideoError(event: Event) {
    console.error('Video failed to load:', this.videoSource);
    this.isPlaying = false;
  }

  onVideoLoaded(event: Event) {
    console.log('Video loaded successfully');
  }

  togglePlayPause() {
    const video = this.videoPlayer.nativeElement;
    if (video.paused) {
      video.play().then(() => {
        this.isPlaying = true;
      }).catch(error => {
        console.error('Failed to play video:', error);
      });
    } else {
      video.pause();
      this.isPlaying = false;
    }
  }
}