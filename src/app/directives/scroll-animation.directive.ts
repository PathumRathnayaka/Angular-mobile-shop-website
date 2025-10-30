import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true
})
export class ScrollAnimationDirective implements OnInit, OnDestroy {
  @Input() animationClass = 'fade-in-up';
  @Input() threshold = 0.1;
  @Input() delay = 0;

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    // Add initial hidden state
    this.el.nativeElement.classList.add('scroll-animation-hidden');
    this.el.nativeElement.style.transitionDelay = `${this.delay}ms`;

    // Create intersection observer
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is visible, add animation class
            this.el.nativeElement.classList.add('scroll-animation-visible');
            this.el.nativeElement.classList.add(this.animationClass);

            // Optionally disconnect after first animation
            // this.observer?.unobserve(this.el.nativeElement);
          } else {
            // Optional: remove classes if you want animation to repeat
            // this.el.nativeElement.classList.remove('scroll-animation-visible');
          }
        });
      },
      {
        threshold: this.threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Start observing
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
