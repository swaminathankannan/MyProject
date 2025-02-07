import { Component, HostListener, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
} from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    RouterLink,
    RouterModule,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactMeComponent,
    FooterComponent,
  ],
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {
  activeSection: string = 'home';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        this.scrollToSection(fragment);
      }
    });
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          this.activeSection = section;
        }
      }
    });
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
