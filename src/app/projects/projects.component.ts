import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { link } from 'fs';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  isBrowser: boolean;
  currentStep: number = 0;
  touchStartX: number = 0;

  cards = [
    {
      id: 1,
      title: 'Certified Recycled Plastics®',
      description:
        'CERTIFIED RECYCLED PLASTIC® is powered by The Nest Company Srl a supplier of technologies and enabling services for the circular economy and the digitalization of the plastic industry.',
      image:
        'https://s5-onboarding-digital-angular.vercel.app/assets/time_managment.svg',
      backgroundColor: 'rgb(82, 167, 162)',
      link: 'https://www.certifiedrecycledplastic.com/',
    },
    {
      id: 2,
      title: 'Plastic Finder',
      description:
        'Plastic Finder is an online marketplace for buying and selling recycled plasticmaterials, helping industries connect with sustainable solutions',
      image:
        'https://s5-onboarding-digital-angular.vercel.app/assets/programming.svg',
      backgroundColor: 'rgba(83, 115, 115, 1)',
      link: 'https://www.plasticfinder.it/en',
    },
    {
      id: 3,
      title: 'Portfolio',
      description:
        ' My personal portfolio showcases my web development projects, skills, and experience Visit to explore my latest works and contributions to the tech industry.',
      image:
        'https://s5-onboarding-digital-angular.vercel.app/assets/meditation.svg',
      backgroundColor: 'rgb(255, 209, 103)',
      link: 'https://swaminathan-portfolio.vercel.app/',
    },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      new Swiper('.swiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 3,
        coverflowEffect: {
          rotate: 10,
          stretch: 50,
          depth: 150,
          modifier: 2.5,
          slideShadows: true,
        },
        keyboard: { enabled: true },
        mousewheel: { thresholdDelta: 70 },
        loop: true,
        pagination: { el: '.swiper-pagination', clickable: true },
        breakpoints: {
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
          1560: { slidesPerView: 3 },
        },
      });
    }
  }

  nextCard(): void {
    if (this.currentStep < this.cards.length - 1) {
      this.currentStep++;
    }
  }

  previousCard(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  onTouchStart(event: TouchEvent): void {
    event.preventDefault(); // Prevents scrolling during touch
    this.touchStartX = event.changedTouches[0].clientX;
  }

  onTouchEnd(event: TouchEvent): void {
    const touchEndX = event.changedTouches[0].clientX;
    const deltaX = this.touchStartX - touchEndX;

    if (deltaX > 50 && this.currentStep < this.cards.length - 1) {
      this.nextCard();
    } else if (deltaX < -50 && this.currentStep > 0) {
      this.previousCard();
    }
  }
}
