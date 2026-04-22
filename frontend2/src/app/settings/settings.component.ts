import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../_services/theme.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SettingsComponent implements OnInit {
  saved = false;

  form = {
    name: '',
    email: '',
    phone: '',
    salary: 0,
    currency: '₸',
    theme: 'light'
  };

  notifications = {
    budget: true,
    monthly: false,
    goal: true
  };

  limits: Record<string, number> = {
    Food: 0,
    Transport: 0,
    Entertainment: 0,
    Shopping: 0,
    Health: 0,
    Other: 0
  };

  currencies = [
    { code: 'KZT', symbol: '₸', name: 'Tenge' },
    { code: 'USD', symbol: '$', name: 'Dollar' },
    { code: 'RUB', symbol: '₽', name: 'Ruble' },
    { code: 'EUR', symbol: '€', name: 'Euro' },
  ];

  categories = [
    { name: 'Food', emoji: '🍔' },
    { name: 'Transport', emoji: '🚗' },
    { name: 'Entertainment', emoji: '🎬' },
    { name: 'Shopping', emoji: '🛍️' },
    { name: 'Health', emoji: '💊' },
    { name: 'Other', emoji: '📦' },
  ];

  constructor(private router: Router,private themeService: ThemeService) {}
  ngOnInit() {
  this.form.theme = this.themeService.getTheme();

  const s = localStorage.getItem('settings');
  if (s) {
    const parsed = JSON.parse(s);
    this.form = { ...this.form, ...(parsed.form || {}) };
    this.notifications = parsed.notifications || this.notifications;
    this.limits = parsed.limits || this.limits;
    this.form.theme = this.themeService.getTheme();
  }
}

  getInitials() {
    if (!this.form.name) return '?';
    return this.form.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
  }

  saveSettings() {
  console.log('Saving theme:', this.form.theme);
  this.themeService.setTheme(this.form.theme);
  console.log('Body classes:', document.body.className);
  localStorage.setItem('settings', JSON.stringify({
    form: this.form,
    notifications: this.notifications,
    limits: this.limits
  }));
  this.saved = true;
  setTimeout(() => this.saved = false, 3000);
}
  clearExpenses() {
    if (confirm('Clear all expenses?')) {
      localStorage.removeItem('expenses');
    }
  }

  resetGoal() {
    if (confirm('Reset your savings goal?')) {
      localStorage.removeItem('userProfile');
      localStorage.removeItem('savedAmount');
    }
  }
}