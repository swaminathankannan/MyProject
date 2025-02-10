import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements AfterViewInit {
  @ViewChild('container', { static: false }) container!: ElementRef;
  @ViewChild('registerBtn', { static: false }) registerBtn!: ElementRef;
  @ViewChild('loginBtn', { static: false }) loginBtn!: ElementRef;

  constructor(public router: Router) {}

  ngAfterViewInit() {
    this.registerBtn.nativeElement.addEventListener('click', () => {
      this.container.nativeElement.classList.add('active');
    });

    this.loginBtn.nativeElement.addEventListener('click', () => {
      this.container.nativeElement.classList.remove('active');
    });
  }
}
