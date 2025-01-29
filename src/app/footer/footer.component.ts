import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  constructor() {}

  ngOnInit() {
    const dropUpButtons = document.querySelectorAll('.drop-up');

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    dropUpButtons.forEach((button) => {
      button.addEventListener('click', scrollToTop);
    });
  }
}
