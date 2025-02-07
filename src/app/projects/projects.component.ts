import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  popupText: string = '';
  popupVisible: boolean = false;
  popupX: number = 0;
  popupY: number = 0;

  constructor() {}

  ngOnInit(): void {}

  showPopup(event: MouseEvent, text: string): void {
    this.popupText = text;
    this.popupVisible = true;
    this.popupX = event.clientX + 20;
    this.popupY = event.clientY + 20;
  }

  hidePopup(): void {
    this.popupVisible = false;
  }
}
