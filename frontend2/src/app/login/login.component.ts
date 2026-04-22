import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  selectedMethod: 'username' | null = null;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  selectMethod(method: 'username') {
    this.selectedMethod = method;
  }

  onClose() {
    this.router.navigate(['/home']);
  }

  loginWithGoogle() {
    window.location.href = 'http://localhost:8000/auth/login/google-oauth2/';
  }

  loginWithApple() {
    window.location.href = 'http://localhost:8000/auth/login/apple-id/';
  }

  onSubmit(): void {
  const { username, password } = this.form;

  this.authService.login(username, password).subscribe({
    next: data => {
      this.storageService.saveUser(data);
      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;

      const profile = localStorage.getItem('userProfile');
      if (!profile) {
        this.router.navigate(['/onboarding']);
      } else {
        this.router.navigate(['/dashboard']);
      }
    },
    error: err => {
      this.errorMessage = err.error.message;
      this.isLoginFailed = true;
    }
  });
}
}
