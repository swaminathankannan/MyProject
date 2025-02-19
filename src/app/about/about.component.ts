import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
  AfterViewInit,
  PLATFORM_ID,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, AfterViewInit {
  activeSlide: number = 1;
  totalSlides: number = 2;
  carousel: any;
  carouselItems: any[] = [];
  @ViewChild('downloadbtn') downloadBtn!: ElementRef;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef
  ) {
    this.loadCarouselItems();
  }

  ngOnInit() {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeCarousel();
    }
  }

  initializeCarousel() {
    const carouselElement = document.getElementById('carouselDesktop');
    if (carouselElement) {
      this.carousel = new (window as any).bootstrap.Carousel(carouselElement, {
        interval: false, // Disable auto sliding
        ride: false,
        wrap: false, // Prevent infinite looping
      });

      carouselElement.addEventListener('slid.bs.carousel', (event: any) => {
        this.activeSlide = event.to + 1;
        this.cdr.detectChanges();
      });
    }
  }

  loadCarouselItems() {
    this.carouselItems = [
      {
        title: 'Education 2019-2022 And 2023-2025',
        description:
          'Completed BSc Computer Science at National College Trichy followed by corress MSc in Computer Science at Pioneer arts and science college in Bharathidasan University',
      },
      {
        title: 'Experience',
        description:
          'As a dedicated Front-End Developer and Software Engineer at Niiv software private limited in Trichy with 2 years of experience, I am passionate about creating intuitive user experiences through modern web technologies. I am committed to continuous learning and staying current with industry trends.',
      },
    ];
  }

  nextSlide() {
    if (this.carousel) {
      this.carousel.next();
      this.activeSlide = Math.min(this.activeSlide + 1, this.totalSlides);
    }
  }

  prevSlide() {
    if (this.carousel) {
      this.carousel.prev();
      this.activeSlide = Math.max(this.activeSlide - 1, 1);
    }
  }

  downloadCv() {
    if (this.downloadBtn) {
      window.open(
        'https://drive.google.com/file/d/1CQCPixNW1-pFyXcJvgTJRVFAAxTu6quT/view?usp=drivesdk',
        '_blank'
      );
    }
  }

  isNextDisabled(): boolean {
    return this.activeSlide === this.totalSlides;
  }

  isPrevDisabled(): boolean {
    return this.activeSlide === 1;
  }
}
