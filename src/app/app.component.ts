import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from "./skills/skills.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopBarComponent, HomeComponent, AboutComponent, SkillsComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myProject';
}
