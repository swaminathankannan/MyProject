import {
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  activeTab: string = 'skills'; // Default active tab

  @ViewChild('skillsSection', { static: false }) skillsSection!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const element = entry.target as HTMLElement;
            if (entry.isIntersecting) {
              element.classList.add('in-view');
            } else {
              element.classList.remove('in-view');
            }
          });
        },
        { threshold: 0.8 }
      );

      // Observe all skill boxes
      const elements = document.querySelectorAll('.skills-box');
      elements.forEach((el) => observer.observe(el));
    }
  }

  setActiveTab(tabName: string): void {
    this.activeTab = tabName;
  }
}
