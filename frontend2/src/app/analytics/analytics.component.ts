import { Component, OnInit, DoCheck } from '@angular/core';
import { DashboardService } from '../_services/dashboard.service';

interface Expense {
  id: number;
  title: string;
  amount: number;
  category: string;
  category_name?: string;
  date: string;
  description?: string;
}

interface ChartBar {
  label: string;
  amount: number;
  percent: number;
  isHighlight: boolean;
}

interface PeriodRange {
  start: Date;
  end: Date;
}

type ChartMode = 'bar' | 'line' | 'donut' | 'horizontal';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit, DoCheck {
  pieColors = ['#00cc55', '#2196F3', '#9C27B0', '#FF9800', '#F44336', '#009688', '#546e7a', '#3949ab'];
  periods = ['Week', 'Month', 'Quarter', 'Year'];
  activePeriod = 'Month';
  selectedBar: string | null = null;
  selectedCategory: string | null = null;
  loading = false;

  currency = '₸';
  currentCurrencyCode = 'KZT';
  baseCurrencyCode = 'KZT';

  chartModes: { key: ChartMode; label: string }[] = [
    { key: 'bar', label: 'Bar' },
    { key: 'line', label: 'Line' },
    { key: 'donut', label: 'Donut' },
    { key: 'horizontal', label: 'Horizontal' }
  ];
  activeChartMode: ChartMode = 'bar';

  rates: Record<string, number> = {
    USD: 1,
    KZT: 515,
    RUB: 93,
    EUR: 0.88
  };

  allExpenses: Expense[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.loadCurrency();
    this.loadExpenses();

    const savedChartMode = localStorage.getItem('analyticsChartMode') as ChartMode | null;
    if (savedChartMode && ['bar', 'line', 'donut', 'horizontal'].includes(savedChartMode)) {
      this.activeChartMode = savedChartMode;
    }
  }

  ngDoCheck(): void {
    this.loadCurrency();
  }

  setChartMode(mode: ChartMode): void {
    this.activeChartMode = mode;
    localStorage.setItem('analyticsChartMode', mode);
  }

  loadCurrency(): void {
    const settingsRaw = localStorage.getItem('settings');
    if (!settingsRaw) {
      this.currentCurrencyCode = 'KZT';
      this.currency = '₸';
      return;
    }

    try {
      const settings = JSON.parse(settingsRaw);
      const code = String(settings?.form?.currency || 'KZT').toUpperCase().trim();
      this.currentCurrencyCode = this.rates[code] ? code : 'KZT';
      this.currency = this.getCurrencySymbolByCode(this.currentCurrencyCode);
    } catch {
      this.currentCurrencyCode = 'KZT';
      this.currency = '₸';
    }
  }

  getCurrencySymbolByCode(code: string): string {
    switch (code) {
      case 'USD': return '$';
      case 'EUR': return '€';
      case 'RUB': return '₽';
      default: return '₸';
    }
  }

  convertAmount(amount: number | null | undefined): number {
    const value = Number(amount || 0);
    const baseRate = this.rates[this.baseCurrencyCode];
    const targetRate = this.rates[this.currentCurrencyCode];

    if (!baseRate || !targetRate) return value;
    return (value / baseRate) * targetRate;
  }

  formatAmount(amount: number | null | undefined): string {
    return this.convertAmount(amount).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }

  loadExpenses(): void {
    this.loading = true;
    this.dashboardService.getExpenses().subscribe({
      next: (data) => {
        this.allExpenses = Array.isArray(data) ? data : [];
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading analytics expenses', err);
        this.allExpenses = [];
        this.loading = false;
      }
    });
  }

  get expenses(): Expense[] {
    const base = this.selectedBar ? this.barExpenses(this.selectedBar) : this.periodExpenses();
    if (!this.selectedCategory) return base;
    return base.filter(expense => this.normalizedCategory(expense) === this.selectedCategory);
  }

  today(): Date {
    return new Date();
  }

  atStartOfDay(value: Date): Date {
    return new Date(value.getFullYear(), value.getMonth(), value.getDate());
  }

  atEndOfDay(value: Date): Date {
    return new Date(value.getFullYear(), value.getMonth(), value.getDate(), 23, 59, 59, 999);
  }

  currentRange(reference = this.today()): PeriodRange {
    const ref = this.atStartOfDay(reference);

    if (this.activePeriod === 'Week') {
      const start = new Date(ref);
      const weekday = start.getDay();
      const diff = weekday === 0 ? 6 : weekday - 1;
      start.setDate(start.getDate() - diff);
      const end = new Date(start);
      end.setDate(start.getDate() + 6);
      return { start: this.atStartOfDay(start), end: this.atEndOfDay(end) };
    }

    if (this.activePeriod === 'Month') {
      const start = new Date(ref.getFullYear(), ref.getMonth(), 1);
      const end = new Date(ref.getFullYear(), ref.getMonth() + 1, 0);
      return { start: this.atStartOfDay(start), end: this.atEndOfDay(end) };
    }

    if (this.activePeriod === 'Quarter') {
      const quarterStartMonth = Math.floor(ref.getMonth() / 3) * 3;
      const start = new Date(ref.getFullYear(), quarterStartMonth, 1);
      const end = new Date(ref.getFullYear(), quarterStartMonth + 3, 0);
      return { start: this.atStartOfDay(start), end: this.atEndOfDay(end) };
    }

    const start = new Date(ref.getFullYear(), 0, 1);
    const end = new Date(ref.getFullYear(), 11, 31);
    return { start: this.atStartOfDay(start), end: this.atEndOfDay(end) };
  }

  previousRange(): PeriodRange {
    const current = this.currentRange();

    if (this.activePeriod === 'Week') {
      const start = new Date(current.start);
      start.setDate(start.getDate() - 7);
      const end = new Date(current.end);
      end.setDate(end.getDate() - 7);
      return { start, end };
    }

    if (this.activePeriod === 'Month') {
      const start = new Date(current.start.getFullYear(), current.start.getMonth() - 1, 1);
      const end = new Date(current.start.getFullYear(), current.start.getMonth(), 0, 23, 59, 59, 999);
      return { start, end };
    }

    if (this.activePeriod === 'Quarter') {
      const start = new Date(current.start.getFullYear(), current.start.getMonth() - 3, 1);
      const end = new Date(current.start.getFullYear(), current.start.getMonth(), 0, 23, 59, 59, 999);
      return { start, end };
    }

    const start = new Date(current.start.getFullYear() - 1, 0, 1);
    const end = new Date(current.start.getFullYear() - 1, 11, 31, 23, 59, 59, 999);
    return { start, end };
  }

  expensesInRange(range: PeriodRange): Expense[] {
    return this.allExpenses.filter(expense => {
      const expenseDate = new Date(expense.date);
      return expenseDate >= range.start && expenseDate <= range.end;
    });
  }

  periodExpenses(): Expense[] {
    return this.expensesInRange(this.currentRange());
  }

  barExpenses(label: string): Expense[] {
    return this.periodExpenses().filter(expense => this.barLabelForExpense(expense) === label);
  }

  barLabelForExpense(expense: Expense): string {
    const date = new Date(expense.date);

    if (this.activePeriod === 'Week') {
      return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][(date.getDay() + 6) % 7];
    }

    if (this.activePeriod === 'Month') {
      const day = date.getDate();
      return `Week ${Math.ceil(day / 7)}`;
    }

    return date.toLocaleDateString('en-US', { month: 'short' });
  }

  chartLabels(): string[] {
    if (this.activePeriod === 'Week') return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    if (this.activePeriod === 'Month') {
      const { end } = this.currentRange();
      const weeks = Math.ceil(end.getDate() / 7);
      return Array.from({ length: weeks }, (_, index) => `Week ${index + 1}`);
    }

    if (this.activePeriod === 'Quarter') {
      const { start } = this.currentRange();
      return [0, 1, 2].map(offset =>
        new Date(start.getFullYear(), start.getMonth() + offset, 1).toLocaleDateString('en-US', { month: 'short' })
      );
    }

    return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  }

  chartBars(): ChartBar[] {
    const labels = this.chartLabels();
    const source = this.selectedCategory
      ? this.periodExpenses().filter(expense => this.normalizedCategory(expense) === this.selectedCategory)
      : this.periodExpenses();

    const grouped = labels.map(label => ({
      label,
      amount: source
        .filter(expense => this.barLabelForExpense(expense) === label)
        .reduce((sum, expense) => sum + Number(expense.amount || 0), 0)
    }));

    const max = Math.max(...grouped.map(item => item.amount), 1);

    return grouped.map(item => ({
      label: item.label,
      amount: item.amount,
      percent: Math.max(item.amount > 0 ? 12 : 4, Math.round((item.amount / max) * 100)),
      isHighlight: item.label === this.selectedBar
    }));
  }

  linePoints(): string {
    const bars = this.chartBars();
    if (!bars.length) return '';

    const width = 640;
    const leftPad = 24;
    const usableWidth = width - leftPad * 2;
    const usableHeight = 168;

    return bars
      .map((bar, index) => {
        const x = leftPad + (usableWidth / Math.max(1, bars.length - 1)) * index;
        const y = 20 + usableHeight - (usableHeight * bar.percent) / 100;
        return `${x},${y}`;
      })
      .join(' ');
  }

  lineAreaPoints(): string {
    const bars = this.chartBars();
    if (!bars.length) return '';

    const width = 640;
    const leftPad = 24;
    const bottom = 204;
    const usableWidth = width - leftPad * 2;
    const usableHeight = 168;

    const points = bars.map((bar, index) => {
      const x = leftPad + (usableWidth / Math.max(1, bars.length - 1)) * index;
      const y = 20 + usableHeight - (usableHeight * bar.percent) / 100;
      return `${x},${y}`;
    });

    const firstX = leftPad;
    const lastX = leftPad + usableWidth;

    return `${firstX},${bottom} ${points.join(' ')} ${lastX},${bottom}`;
  }

  lineDots() {
    const bars = this.chartBars();
    const width = 640;
    const leftPad = 24;
    const usableWidth = width - leftPad * 2;
    const usableHeight = 168;

    return bars.map((bar, index) => ({
      label: bar.label,
      amount: bar.amount,
      isHighlight: bar.isHighlight,
      x: leftPad + (usableWidth / Math.max(1, bars.length - 1)) * index,
      y: 20 + usableHeight - (usableHeight * bar.percent) / 100
    }));
  }

  selectBar(label: string): void {
    this.selectedBar = this.selectedBar === label ? null : label;
  }

  selectCategory(category: string): void {
    this.selectedCategory = this.selectedCategory === category ? null : category;
    this.selectedBar = null;
  }

  clearSelections(): void {
    this.selectedBar = null;
    this.selectedCategory = null;
  }

  setPeriod(period: string): void {
    this.activePeriod = period;
    this.clearSelections();
  }

  totalSpent(): number {
    return this.expenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
  }

  allPeriodTotal(): number {
    const periodExpenses = this.selectedCategory
      ? this.periodExpenses().filter(expense => this.normalizedCategory(expense) === this.selectedCategory)
      : this.periodExpenses();

    return periodExpenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
  }

  periodDayCount(): number {
    const { start, end } = this.currentRange();
    const diff = end.getTime() - start.getTime();
    return Math.max(1, Math.round(diff / 86400000) + 1);
  }

  dailyAvg(): number {
    return this.totalSpent() / this.periodDayCount();
  }

  forecast(): number {
    const now = this.today();
    const { start, end } = this.currentRange();
    const elapsedEnd = now < end ? now : end;
    const elapsedDays = Math.max(1, Math.round((this.atEndOfDay(elapsedEnd).getTime() - start.getTime()) / 86400000) + 1);
    const fullDays = this.periodDayCount();
    return (this.totalSpent() / elapsedDays) * fullDays;
  }

  topCategory(): string {
    return this.categoryTotals()[0]?.name || '—';
  }

  topCategoryPct(): number {
    return this.categoryTotals()[0]?.percent || 0;
  }

  periodTitle(): string {
    const labels: Record<string, string> = {
      Week: 'Week total',
      Month: 'Month total',
      Quarter: 'Quarter total',
      Year: 'Year total'
    };
    return labels[this.activePeriod];
  }

  transactionsLabel(): string {
    const labels: Record<string, string> = {
      Week: 'transactions this week',
      Month: 'transactions this month',
      Quarter: 'transactions this quarter',
      Year: 'transactions this year'
    };
    return labels[this.activePeriod];
  }

  forecastLabel(): string {
    const labels: Record<string, string> = {
      Week: 'projected this week',
      Month: 'projected this month',
      Quarter: 'projected this quarter',
      Year: 'projected this year'
    };
    return labels[this.activePeriod];
  }

  chartTitle(): string {
    const titles: Record<string, string> = {
      Week: 'Daily spending this week',
      Month: 'Weekly spending this month',
      Quarter: 'Monthly spending this quarter',
      Year: 'Monthly spending this year'
    };
    return titles[this.activePeriod];
  }

  normalizedCategory(expense: Expense): string {
    return expense.category_name || expense.category || 'Other';
  }

  categoryTotals() {
    const map: Record<string, { total: number; count: number }> = {};

    this.expenses.forEach(expense => {
      const category = this.normalizedCategory(expense);
      if (!map[category]) map[category] = { total: 0, count: 0 };
      map[category].total += Number(expense.amount || 0);
      map[category].count += 1;
    });

    const total = this.totalSpent() || 1;

    return Object.entries(map)
      .map(([name, value]) => ({
        name,
        total: value.total,
        count: value.count,
        percent: Math.round((value.total / total) * 100)
      }))
      .sort((a, b) => b.total - a.total);
  }

  pieSlices() {
    const categories = this.categoryTotals();
    const total = this.totalSpent();
    if (!total) return [];

    let angle = -Math.PI / 2;
    return categories.map(category => {
      const arc = (category.total / total) * 2 * Math.PI;
      const end = angle + arc;
      const x1 = 100 + 90 * Math.cos(angle);
      const y1 = 100 + 90 * Math.sin(angle);
      const x2 = 100 + 90 * Math.cos(end);
      const y2 = 100 + 90 * Math.sin(end);
      const path = `M100 100 L${x1} ${y1} A90 90 0 ${arc > Math.PI ? 1 : 0} 1 ${x2} ${y2}Z`;
      angle = end;
      return { category: category.name, path };
    });
  }

  comparisonCurrentAmount(): number {
    return this.allPeriodTotal();
  }

  comparisonPreviousAmount(): number {
    const previousExpenses = this.expensesInRange(this.previousRange());
    const filtered = this.selectedCategory
      ? previousExpenses.filter(expense => this.normalizedCategory(expense) === this.selectedCategory)
      : previousExpenses;

    return filtered.reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
  }

  comparisonCurrentLabel(): string {
    const labels: Record<string, string> = {
      Week: 'This week',
      Month: 'This month',
      Quarter: 'This quarter',
      Year: 'This year'
    };
    return labels[this.activePeriod];
  }

  comparisonPreviousLabel(): string {
    const labels: Record<string, string> = {
      Week: 'Previous week',
      Month: 'Previous month',
      Quarter: 'Previous quarter',
      Year: 'Previous year'
    };
    return labels[this.activePeriod];
  }

  comparisonCurrentPct(): number {
    const current = this.comparisonCurrentAmount();
    const previous = this.comparisonPreviousAmount();
    const max = Math.max(current, previous, 1);
    return Math.round((current / max) * 100);
  }

  comparisonPreviousPct(): number {
    const current = this.comparisonCurrentAmount();
    const previous = this.comparisonPreviousAmount();
    const max = Math.max(current, previous, 1);
    return Math.round((previous / max) * 100);
  }

  comparisonInsightText(): string {
    const current = this.comparisonCurrentAmount();
    const previous = this.comparisonPreviousAmount();
    const difference = Math.abs(current - previous);

    if (current > previous) return `↑ ${this.money(difference)} more than ${this.comparisonPreviousLabel().toLowerCase()}`;
    if (current < previous) return `↓ Saved ${this.money(difference)} vs ${this.comparisonPreviousLabel().toLowerCase()}`;
    return `No change vs ${this.comparisonPreviousLabel().toLowerCase()}`;
  }

  comparisonInsightClass(): string {
    return this.comparisonCurrentAmount() > this.comparisonPreviousAmount() ? 'bad' : 'good';
  }

  savingsTips() {
    const factor = this.activePeriod === 'Week' ? 0.15 : this.activePeriod === 'Year' ? 0.12 : 0.2;
    return this.categoryTotals().slice(0, 4).map(category => ({
      category: category.name,
      saving: category.total * factor,
      percent: category.percent,
      reductionPercent: Math.round(factor * 100)
    }));
  }

  totalPotentialSavings(): number {
    return this.savingsTips().reduce((sum, tip) => sum + tip.saving, 0);
  }

  activeAccentCategory(): string {
    return this.selectedCategory || this.topCategory() || 'Food';
  }

  savingsPeriodLabel(): string {
    const labels: Record<string, string> = {
      Week: 'week',
      Month: 'month',
      Quarter: 'quarter',
      Year: 'year'
    };
    return labels[this.activePeriod];
  }

  hasCategoryFocus(): boolean {
    return !!this.selectedCategory || this.categoryTotals().length <= 1;
  }

  focusedCategory() {
    return this.categoryTotals()[0] || null;
  }

  focusedCategoryShare(): number {
    return this.focusedCategory()?.percent || 0;
  }

  focusedCategoryTransactions(): number {
    return this.focusedCategory()?.count || 0;
  }

  focusedCategoryAmount(): number {
    return this.focusedCategory()?.total || 0;
  }

  focusedCategoryAverage(): number {
    const transactions = this.focusedCategoryTransactions();
    if (!transactions) return 0;
    return this.focusedCategoryAmount() / transactions;
  }

  categoryColor(category: string | null): string {
    const colors: Record<string, string> = {
      Food: '#00c853',
      Transport: '#1e88e5',
      Shopping: '#fb8c00',
      Entertainment: '#8e24aa',
      Health: '#e53935',
      Bills: '#3949ab',
      Education: '#00897b',
      Other: '#546e7a'
    };
    return category ? (colors[category] || '#00c853') : '#00c853';
  }

  categoryTint(category: string | null, alpha = 0.12): string {
    const hex = this.categoryColor(category).replace('#', '');
    const fullHex = hex.length === 3
      ? hex.split('').map(char => char + char).join('')
      : hex;
    const r = parseInt(fullHex.slice(0, 2), 16);
    const g = parseInt(fullHex.slice(2, 4), 16);
    const b = parseInt(fullHex.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  categoryEmoji(category: string): string {
    const emojiMap: Record<string, string> = {
      Food: '🍔',
      Transport: '🚗',
      Entertainment: '🎬',
      Shopping: '🛍️',
      Health: '💊',
      Bills: '💡',
      Education: '📚',
      Other: '📦'
    };
    return emojiMap[category] || '💰';
  }

  money(amount: number | null | undefined): string {
    return `${this.currency}${this.formatAmount(amount)}`;
  }

  expenseMoney(amount: number | null | undefined): string {
    return `-${this.currency}${this.formatAmount(amount)}`;
  }
}