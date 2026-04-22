import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GoalService } from '../_services/goal.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GoalComponent implements OnInit {
  profile: any = null;
  savedAmount = 0;
  addSavingAmount = 0;

  goalForm = {
    salary: 0,
    dreamLabel: '',
    dreamEmoji: '',
    amount: 0,
    months: 12
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

  monthlyHistory = [
    { month: 'Jan', saved: 50000 },
    { month: 'Feb', saved: 80000 },
    { month: 'Mar', saved: 60000 },
    { month: 'Apr', saved: 90000 },
    { month: 'May', saved: 75000 },
    { month: 'Jun', saved: 100000 },
  ];

  constructor(private goalService: GoalService) {}

ngOnInit() {
  const saved = localStorage.getItem('userProfile');
  if (saved) this.profile = JSON.parse(saved);

  const saving = localStorage.getItem('savedAmount');
  if (saving) this.savedAmount = +saving;
}
  saveGoal() {
  this.profile = {
    salary: this.goalForm.salary,
    currency: '₸',
    dream: {
      label: this.goalForm.dreamLabel,
      emoji: this.goalForm.dreamEmoji,
      amount: this.goalForm.amount,
      months: this.goalForm.months
    },
    monthlySaving: this.goalMonthlySaving()
  };

  localStorage.setItem('userProfile', JSON.stringify(this.profile));
}

  resetGoal() {
  localStorage.removeItem('userProfile');
  localStorage.removeItem('savedAmount');

  this.profile = null;
  this.savedAmount = 0;
}

  goalMonthlySaving() {
    if (!this.goalForm.amount || !this.goalForm.months) return 0;
    return Math.round(this.goalForm.amount / this.goalForm.months);
  }

  goalProgress() {
    if (!this.profile) return 0;
    return Math.min(Math.round((this.savedAmount / this.profile.dream.amount) * 100), 100);
  }

  monthsLeft() {
    if (!this.profile) return 0;
    const remaining = this.profile.dream.amount - this.savedAmount;
    return Math.ceil(remaining / this.profile.monthlySaving);
  }

  addSaving() {
  if (!this.addSavingAmount) return;

  this.savedAmount += this.addSavingAmount;
  localStorage.setItem('savedAmount', String(this.savedAmount));

  this.addSavingAmount = 0;
}

  maxHistory() {
    return Math.max(...this.monthlyHistory.map(m => m.saved));
  }

  goalAdvice() {
    if (!this.profile) return '';
    const progress = this.goalProgress();
    if (progress >= 100) return '🎉 Поздравляем! Вы достигли своей цели!';
    if (progress >= 75) return '🔥 Отлично! Вы на финишной прямой. Не останавливайтесь!';
    if (progress >= 50) return '💪 Половина пути позади. Продолжайте в том же духе!';
    if (progress >= 25) return '📈 Хорошее начало! Откладывайте регулярно чтобы достичь цели вовремя.';
    return '🚀 Начало положено! Попробуйте откладывать чуть больше каждый месяц.';
  }
}