import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent {
  form: any = {
    email: null,
    phone: null,
  };
  selectedMethod: 'email' | 'phone' | null = null;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  selectMethod(method: 'email' | 'phone') {
    this.selectedMethod = method;
  }

  onClose() {
    this.router.navigate(['/home']);  // ← закрывает и идёт на home
  }

  loginWithGoogle() {
    window.location.href = 'http://localhost:8000/auth/login/google-oauth2/';
  }

  loginWithApple() {
    window.location.href = 'http://localhost:8000/auth/login/apple-id/';
  }

  onSubmit(): void {
    const { email, phone } = this.form;
    const identifier = email || phone;

    this.authService.register(identifier, '', '').subscribe({
      next: data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}