import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent {
  currentStep = 1;
  salary = 0;
  currency = '₸';

  dream = {
    label: '',
    emoji: '',
    amount: 0,
    months: 12,
    custom: ''
  };

  dreamOptions = [
    { emoji: '🚗', label: 'Автомобиль' },
    { emoji: '📱', label: 'iPhone' },
    { emoji: '✈️', label: 'Путешествие' },
    { emoji: '🏠', label: 'Квартира' },
    { emoji: '💻', label: 'Ноутбук' },
    { emoji: '💍', label: 'Свадьба' },
    { emoji: '🎓', label: 'Образование' },
    { emoji: '✏️', label: 'Другое' },
  ];

  constructor(private router: Router) {}

  selectDream(d: any) {
    this.dream.label = d.label;
    this.dream.emoji = d.emoji;
  }

  monthlySaving() {
    if (!this.dream.amount || !this.dream.months) return 0;
    return Math.round(this.dream.amount / this.dream.months);
  }

  nextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  finish() {
    localStorage.setItem('userProfile', JSON.stringify({
      salary: this.salary,
      currency: this.currency,
      dream: this.dream,
      monthlySaving: this.monthlySaving()
    }));
    this.router.navigate(['/dashboard']);
  }
}