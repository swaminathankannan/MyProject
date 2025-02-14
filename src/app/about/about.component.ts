import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  activeSlide: number = 1;
  totalSlides: number = 2;
  carousel: any;
  carouselMobile: any;
  carouselItems: any[] = [];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef
  ) {
    this.loadCarouselItems();
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const carouselElement = document.getElementById('carouselDesktop');
      if (carouselElement) {
        this.carousel = new (window as any).bootstrap.Carousel(carouselElement);
        carouselElement.addEventListener('slid.bs.carousel', (event: any) => {
          console.log('Slide changed:', event.to + 1);
          this.activeSlide = event.to + 1;
          this.cdr.detectChanges();
        });
      }

      const carouselElementMobile = document.getElementById('carouselMobile');
      if (carouselElementMobile) {
        this.carouselMobile = new (window as any).bootstrap.Carousel(
          carouselElementMobile
        );
        carouselElementMobile.addEventListener(
          'slid.bs.carousel',
          (event: any) => {
            console.log('Mobile slide changed:', event.to + 1);
            this.activeSlide = event.to + 1;
            this.cdr.detectChanges();
          }
        );
      }
    }
  }

  loadCarouselItems() {
    this.carouselItems = [
      {
        title: 'Education 2019-2022 And 2023 - 2025',
        description:
          'Completed BSc in Computer Science followed by MSc in Computer Science.',
        extra: '',
      },
      {
        title: 'Experience',
        description:
          'As a dedicated Front-End Developer and Software Engineer, I am passionate about creating intuitive user experiences through modern web technologies. I am committed to continuous learning and staying current with industry trends, aspiring to contribute to innovative projects that integrate front-end and back-end systems seamlessly',
        extra: '',
      },
    ];
  }

  nextSlide() {
    if (this.carousel) {
      this.carousel.next();
      this.activeSlide = Math.min(this.activeSlide + 1, this.totalSlides); // Prevent going beyond total slides
    }
    if (this.carouselMobile) {
      this.carouselMobile.next();
      this.activeSlide = Math.min(this.activeSlide + 1, this.totalSlides);
    }
  }

  prevSlide() {
    if (this.carousel) {
      this.carousel.prev();
      this.activeSlide = Math.max(this.activeSlide - 1, 1); // Prevent going below 1
    }
    if (this.carouselMobile) {
      this.carouselMobile.prev();
      this.activeSlide = Math.max(this.activeSlide - 1, 1);
    }
  }

  isNextDisabled(): boolean {
    return this.activeSlide === this.totalSlides;
  }

  isPrevDisabled(): boolean {
    return this.activeSlide === 1;
  }
}
