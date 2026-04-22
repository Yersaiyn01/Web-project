import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../_services/theme.service';
import { GoalService } from '../_services/goal.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  saved = false;

  form = {
    name: '',
    email: '',
    phone: '',
    salary: 0,
    currency: 'KZT',
    theme: 'light',
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

  exchangeRates: Record<string, Record<string, number>> = {
    KZT: {
      KZT: 1,
      USD: 0.00194,
      RUB: 0.18,
      EUR: 0.0017
    },
    USD: {
      KZT: 515,
      USD: 1,
      RUB: 93,
      EUR: 0.88
    },
    RUB: {
      KZT: 5.54,
      USD: 0.0108,
      RUB: 1,
      EUR: 0.0095
    },
    EUR: {
      KZT: 585,
      USD: 1.14,
      RUB: 106,
      EUR: 1
    }
  };

  constructor(
    private router: Router,
    private themeService: ThemeService,
    private goalService: GoalService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.form.theme = this.themeService.getTheme();

    const s = localStorage.getItem('settings');
    if (s) {
      try {
        const parsed = JSON.parse(s);
        this.form = { ...this.form, ...(parsed.form || {}) };
        this.notifications = { ...this.notifications, ...(parsed.notifications || {}) };
        this.limits = { ...this.limits, ...(parsed.limits || {}) };
      } catch (e) {
        console.error('Settings parse error', e);
      }
    }

    this.form.theme = this.themeService.getTheme();
    this.form.currency = this.normalizeCurrency(this.form.currency);
  }

  normalizeCurrency(code: string): string {
    const normalized = String(code || '').trim().toUpperCase();
    return this.exchangeRates[normalized] ? normalized : 'KZT';
  }

  getInitials(): string {
    if (!this.form.name?.trim()) return '?';

    return this.form.name
      .trim()
      .split(' ')
      .filter(Boolean)
      .map(w => w[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  }

  persistSettings(showSaved = false): void {
    localStorage.setItem('settings', JSON.stringify({
      form: this.form,
      notifications: this.notifications,
      limits: this.limits
    }));

    this.goalService.syncProfileWithSettings();

    if (showSaved) {
      this.saved = true;
      setTimeout(() => {
        this.saved = false;
      }, 3000);
    }
  }

  selectCurrency(newCode: string): void {
    const oldCode = this.normalizeCurrency(this.form.currency);
    newCode = this.normalizeCurrency(newCode);

    if (oldCode === newCode) return;

    const rate = this.exchangeRates[oldCode]?.[newCode];

    if (rate == null) {
      alert('Курс не найден');
      return;
    }

    this.form.salary = Number(((Number(this.form.salary) || 0) * rate).toFixed(2));

    Object.keys(this.limits).forEach(key => {
      this.limits[key] = Number(((Number(this.limits[key]) || 0) * rate).toFixed(2));
    });

    this.form.currency = newCode;
    this.persistSettings(true);
  }

  getCurrencySymbol(): string {
    return this.currencies.find(c => c.code === this.form.currency)?.symbol || '₸';
  }

  selectTheme(theme: string): void {
    this.form.theme = theme;
    this.themeService.setTheme(theme);
    this.persistSettings();
  }

  toggleNotification(key: 'budget' | 'monthly' | 'goal'): void {
    this.notifications[key] = !this.notifications[key];
    this.persistSettings();
  }

  saveSettings(): void {
    this.themeService.setTheme(this.form.theme);
    this.persistSettings(true);
  }

  clearExpenses(): void {
    if (confirm('Clear all expenses?')) {
      localStorage.removeItem('expenses');
      this.saved = true;
      setTimeout(() => {
        this.saved = false;
      }, 3000);
    }
  }

  resetGoal(): void {
    if (confirm('Reset your savings goal?')) {
      this.goalService.reset();
      this.saved = true;
      setTimeout(() => {
        this.saved = false;
      }, 3000);
    }
  }

  logout(): void {
    localStorage.removeItem('auth-user');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}