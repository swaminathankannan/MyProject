import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // Check if running in the browser
    if (isPlatformBrowser(this.platformId)) {
      const carousel = document.getElementById('carouselExample');
      const textOne = document.getElementById('textOne');
      const textTwo = document.getElementById('textTwo');

      if (carousel) {
        carousel.addEventListener('slid.bs.carousel', (event: any) => {
          // Check the active slide index
          const activeIndex = event.to;

          // Toggle the text divs
          if (textOne && textTwo) {
            if (activeIndex === 0) {
              textOne.classList.remove('d-none');
              textTwo.classList.add('d-none');
            } else if (activeIndex === 1) {
              textOne.classList.add('d-none');
              textTwo.classList.remove('d-none');
            }
          }
        });
      }
    }
  }
}
