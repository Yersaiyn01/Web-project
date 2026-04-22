import { Component, ViewEncapsulation } from '@angular/core';
interface Expense {
  id: number;
  title: string;
  amount: number;
  category: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class DashboardComponent {
  Math = Math;
  searchQuery = '';
  showForm = false;
  showGoalModal = false;
  savedAmount = 0;
  addSavingAmount = 0;
  profile: any = null;

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

  expenses: Expense[] = [
  ];

  newExpense = { title: '', amount: 0, category: 'Food' };

  monthlyData = [
    { month: 'Jan', percent: 40 }, { month: 'Feb', percent: 60 },
    { month: 'Mar', percent: 45 }, { month: 'Apr', percent: 80 },
    { month: 'May', percent: 55 }, { month: 'Jun', percent: 90 },
    { month: 'Jul', percent: 70 }, { month: 'Aug', percent: 95 },
  ];

  aiTip = 'You spend 34% on Food. Consider meal prepping to save up to $120/month.';

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
    this.profile = null;
    localStorage.removeItem('userProfile');
    this.goalForm = { salary: 0, dreamLabel: '', dreamEmoji: '', amount: 0, months: 12 };
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
    const monthly = this.profile.monthlySaving;
    return monthly > 0 ? Math.ceil(remaining / monthly) : this.profile.dream.months;
  }

  goalAdvice() {
    if (!this.profile) return '';
    const remaining = this.profile.dream.amount - this.savedAmount;
    const monthlyLeft = this.profile.salary - this.totalExpenses();
    if (monthlyLeft <= 0) return '⚠️ Ваши расходы превышают доход. Сократите траты!';
    if (monthlyLeft >= this.profile.monthlySaving) return `✅ Вы идёте по плану! Откладывайте ${this.profile.currency}${this.profile.monthlySaving.toLocaleString()} и достигнете цели за ${this.monthsLeft()} мес.`;
    return `💡 Вам нужно сократить расходы на ${this.profile.currency}${(this.profile.monthlySaving - monthlyLeft).toLocaleString()} чтобы достичь цели вовремя.`;
  }

  addSaving() {
    if (!this.addSavingAmount) return;
    this.savedAmount += this.addSavingAmount;
    localStorage.setItem('savedAmount', String(this.savedAmount));
    this.addSavingAmount = 0;
  }

  addExpense() {
    if (!this.newExpense.title || !this.newExpense.amount) return;
    this.expenses.unshift({ id: Date.now(), ...this.newExpense });
    this.newExpense = { title: '', amount: 0, category: 'Food' };
    this.showForm = false;
  }

  deleteExpense(id: number) {
    this.expenses = this.expenses.filter(e => e.id !== id);
  }

  totalExpenses() {
    return this.expenses.reduce((s, e) => s + e.amount, 0);
  }

  savingsRate() {
    const total = this.totalExpenses();
    return total > 0 ? Math.min(Math.round((1 - total / 2000) * 100), 99) : 65;
  }

  biggestCategory() {
    const totals = this.categoryTotals();
    return totals.length ? totals[0].name : '—';
  }

  categoryTotals() {
    const map: Record<string, number> = {};
    this.expenses.forEach(e => map[e.category] = (map[e.category] || 0) + e.amount);
    const total = this.totalExpenses() || 1;
    return Object.entries(map)
      .map(([name, t]) => ({ name, total: t, percent: Math.round((t / total) * 100) }))
      .sort((a, b) => b.total - a.total);
  }

  categoryColor(cat: string): string {
    const c: Record<string, string> = {
      Food: '#e8f5e9', Transport: '#e3f2fd', Entertainment: '#f3e5f5',
      Shopping: '#fff3e0', Health: '#e0f2f1', Other: '#f5f5f5'
    };
    return c[cat] || '#f5f5f5';
  }

  categoryEmoji(cat: string): string {
    const e: Record<string, string> = {
      Food: '🍔', Transport: '🚗', Entertainment: '🎬',
      Shopping: '🛍️', Health: '💊', Other: '📦'
    };
    return e[cat] || '💰';
  }
}