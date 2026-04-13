import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  selectedOption = 0;
  email = '';

  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }

  loginWithGoogle() {
    window.location.href = 'http://localhost:8000/auth/login/google-oauth2/';
  }
}