import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Swiper from 'swiper'; // ✅ Import Swiper
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  popupText: string = '';
  popupVisible: boolean = false;
  popupX: number = 0;
  popupY: number = 0;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      setTimeout(() => {
        new Swiper('.swiper', {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true,
          },
          keyboard: {
            enabled: true,
          },
          mousewheel: {
            thresholdDelta: 70,
          },
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          breakpoints: {
            640: { slidesPerView: 2 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1560: { slidesPerView: 3 },
          },
        });
      }, 0);
    }
  }
}
