import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
  { path: '**', component: NotfoundComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '/home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactMeComponent },
];
