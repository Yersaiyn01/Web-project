import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { GoalService } from '../_services/goal.service';

type GoalChartType = 'bar' | 'line' | 'ring';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit, DoCheck {
  profile: any = null;
  savedAmount = 0;
  addSavingAmount: number | null = null;
  monthlyHistory: Array<{ month: string; saved: number }> = [];

  settingsSalary = 0;
  settingsCurrencySymbol = '₸';

  selectedChart: GoalChartType = 'bar';

  goalForm = {
    dreamLabel: '',
    dreamEmoji: '',
    amount: 0,
    months: 12,
    customDreamName: ''
  };

  dreamOptions = [
    { emoji: '🚗', label: 'Автомобиль' },
    { emoji: '📱', label: 'iPhone' },
    { emoji: '✈️', label: 'Путешествие' },
    { emoji: '🏠', label: 'Квартира' },
    { emoji: '💻', label: 'Ноутбук' },
    { emoji: '💍', label: 'Свадьба' },
    { emoji: '🎓', label: 'Образование' },
    { emoji: '✏️', label: 'Другое' }
  ];

  chartModes: Array<{ key: GoalChartType; label: string }> = [
    { key: 'bar', label: 'Bar' },
    { key: 'line', label: 'Line' },
    { key: 'ring', label: 'Ring' }
  ];

  quickAmounts = [10000, 25000, 50000, 100000];

  constructor(
    private goalService: GoalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const savedChart = localStorage.getItem('goal-chart-type') as GoalChartType | null;
    if (savedChart && ['bar', 'line', 'ring'].includes(savedChart)) {
      this.selectedChart = savedChart;
    }

    this.reloadGoalState();
  }

  ngDoCheck(): void {
    const latestSalary = this.goalService.getSalaryFromSettings();
    const latestCurrency = this.goalService.getCurrencyFromSettings();

    if (latestSalary !== this.settingsSalary || latestCurrency !== this.settingsCurrencySymbol) {
      this.reloadGoalState();
    }
  }

  setChart(type: GoalChartType): void {
    this.selectedChart = type;
    localStorage.setItem('goal-chart-type', type);
  }

  reloadGoalState(): void {
    this.settingsSalary = Number(this.goalService.getSalaryFromSettings() || 0);
    this.settingsCurrencySymbol = this.goalService.getCurrencyFromSettings();

    this.goalService.syncProfileWithSettings();

    this.profile = this.goalService.getProfile();
    this.savedAmount = this.goalService.getSavedAmount();
    this.monthlyHistory = this.goalService.getHistory();

    if (this.profile) {
      this.profile.salary = this.settingsSalary;
      this.profile.currency = this.settingsCurrencySymbol;
    }
  }

  goToSettings(): void {
    this.router.navigate(['/settings']);
  }

  selectDream(label: string, emoji: string): void {
    this.goalForm.dreamLabel = label;
    this.goalForm.dreamEmoji = emoji;

    if (label !== 'Другое') {
      this.goalForm.customDreamName = '';
    }
  }

  finalDreamLabel(): string {
    if (this.goalForm.dreamLabel === 'Другое') {
      const custom = (this.goalForm.customDreamName || '').trim();
      return custom || 'Другое';
    }

    return this.goalForm.dreamLabel;
  }

  isSaveDisabled(): boolean {
    if (!this.settingsSalary) return true;
    if (!this.goalForm.amount || this.goalForm.amount <= 0) return true;
    if (!this.goalForm.months || this.goalForm.months <= 0) return true;
    if (!this.goalForm.dreamLabel) return true;

    if (this.goalForm.dreamLabel === 'Другое' && !(this.goalForm.customDreamName || '').trim()) {
      return true;
    }

    return false;
  }

  saveGoal(): void {
    if (this.isSaveDisabled()) {
      return;
    }

    this.goalService.saveProfile({
      salary: this.settingsSalary,
      currency: this.settingsCurrencySymbol,
      monthlySaving: this.goalMonthlySaving(),
      dream: {
        label: this.finalDreamLabel(),
        emoji: this.goalForm.dreamEmoji,
        amount: Number(this.goalForm.amount),
        months: Number(this.goalForm.months)
      }
    });

    this.reloadGoalState();
  }

  editGoal(): void {
    if (!this.profile) return;

    const currentLabel = this.profile?.dream?.label || '';
    const isPresetDream = this.dreamOptions.some(d => d.label === currentLabel && d.label !== 'Другое');

    this.goalForm = {
      dreamLabel: isPresetDream ? currentLabel : 'Другое',
      dreamEmoji: this.profile?.dream?.emoji || '✏️',
      amount: Number(this.profile?.dream?.amount || 0),
      months: Number(this.profile?.dream?.months || 12),
      customDreamName: isPresetDream ? '' : currentLabel
    };

    this.goalService.reset();
    this.profile = null;
    this.savedAmount = 0;
    this.monthlyHistory = this.goalService.getHistory();
  }

  goalMonthlySaving(): number {
    const amount = Number(this.goalForm.amount || 0);
    const months = Number(this.goalForm.months || 0);

    if (!amount || !months) return 0;

    return Math.ceil(amount / months);
  }

  savingPercentOfSalary(): number {
    if (!this.settingsSalary || this.settingsSalary <= 0) return 0;

    return Math.round((this.goalMonthlySaving() / this.settingsSalary) * 100);
  }

  savingPercentVisual(): number {
    return Math.min(this.savingPercentOfSalary(), 100);
  }

  isGoalTooExpensive(): boolean {
    return this.savingPercentOfSalary() > 80;
  }

  salaryRecommendation(): string {
    const percent = this.savingPercentOfSalary();

    if (!this.settingsSalary) {
      return 'Сначала добавьте зарплату в настройках.';
    }

    if (!this.goalForm.amount || !this.goalForm.months) {
      return 'Введите сумму и срок цели.';
    }

    if (percent <= 20) {
      return 'Отличный план. Такая цель выглядит комфортной для вашей зарплаты.';
    }

    if (percent <= 40) {
      return 'Нормально. Цель достижимая, если откладывать регулярно каждый месяц.';
    }

    if (percent <= 60) {
      return 'Нагрузка уже заметная. Возможно, стоит сократить ежемесячные расходы.';
    }

    if (percent <= 80) {
      return 'Цель довольно тяжёлая для текущей зарплаты. Лучше увеличить срок накопления.';
    }

    return 'Слишком большая нагрузка на зарплату. Рекомендуется увеличить срок или уменьшить сумму цели.';
  }

  goalProgress(): number {
    if (!this.profile?.dream?.amount) return 0;
    return Math.min(Math.round((this.savedAmount / this.profile.dream.amount) * 100), 100);
  }

  monthsLeft(): number {
    if (!this.profile?.dream?.amount || !this.profile?.monthlySaving) return 0;

    const remaining = Math.max(0, this.profile.dream.amount - this.savedAmount);
    return Math.ceil(remaining / this.profile.monthlySaving);
  }

  remainingAmount(): number {
    if (!this.profile?.dream?.amount) return 0;
    return Math.max(0, this.profile.dream.amount - this.savedAmount);
  }

  addSaving(): void {
    if (!this.addSavingAmount || this.addSavingAmount <= 0) return;

    this.goalService.addSaving(this.addSavingAmount);
    this.addSavingAmount = null;
    this.reloadGoalState();
  }

  pickQuickAmount(amount: number): void {
    this.addSavingAmount = amount;
  }

  maxHistory(): number {
    return Math.max(...this.monthlyHistory.map(item => item.saved), 1);
  }

  chartPoints(): string {
    if (!this.monthlyHistory.length) return '';

    const width = 640;
    const leftPad = 26;
    const rightPad = 26;
    const topPad = 20;
    const usableWidth = width - leftPad - rightPad;
    const usableHeight = 160;
    const max = this.maxHistory();

    return this.monthlyHistory
      .map((item, index) => {
        const x = leftPad + (usableWidth / Math.max(1, this.monthlyHistory.length - 1)) * index;
        const y = topPad + usableHeight - (Number(item.saved || 0) / max) * usableHeight;
        return `${x},${y}`;
      })
      .join(' ');
  }

  chartAreaPoints(): string {
    if (!this.monthlyHistory.length) return '';

    const width = 640;
    const leftPad = 26;
    const rightPad = 26;
    const topPad = 20;
    const bottomY = 180;
    const usableWidth = width - leftPad - rightPad;
    const usableHeight = 160;
    const max = this.maxHistory();

    const points = this.monthlyHistory.map((item, index) => {
      const x = leftPad + (usableWidth / Math.max(1, this.monthlyHistory.length - 1)) * index;
      const y = topPad + usableHeight - (Number(item.saved || 0) / max) * usableHeight;
      return `${x},${y}`;
    });

    const firstX = leftPad;
    const lastX = width - rightPad;

    return `${firstX},${bottomY} ${points.join(' ')} ${lastX},${bottomY}`;
  }

  chartDots(): Array<{ month: string; saved: number; x: number; y: number }> {
    const width = 640;
    const leftPad = 26;
    const rightPad = 26;
    const topPad = 20;
    const usableWidth = width - leftPad - rightPad;
    const usableHeight = 160;
    const max = this.maxHistory();

    return this.monthlyHistory.map((item, index) => ({
      month: item.month,
      saved: item.saved,
      x: leftPad + (usableWidth / Math.max(1, this.monthlyHistory.length - 1)) * index,
      y: topPad + usableHeight - (Number(item.saved || 0) / max) * usableHeight
    }));
  }

  ringCircumference(): number {
    return 2 * Math.PI * 52;
  }

  ringOffset(): number {
    return this.ringCircumference() * (1 - this.goalProgress() / 100);
  }

  goalAdvice(): string {
    if (!this.profile) return '';

    const progress = this.goalProgress();

    if (progress >= 100) return '🎉 Поздравляем! Вы уже достигли цели.';
    if (progress >= 75) return '🔥 Отличный темп. До цели осталось совсем немного.';
    if (progress >= 50) return '💪 Уже пройдена половина пути. Продолжайте регулярно откладывать.';
    if (progress >= 25) return '📈 Хороший старт. Старайтесь не пропускать ежемесячные пополнения.';
    return '🚀 Начало положено. Даже небольшие регулярные суммы дадут сильный результат.';
  }
}