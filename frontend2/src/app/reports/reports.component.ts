import { Component, OnInit, DoCheck } from '@angular/core';
import { DashboardService } from '../_services/dashboard.service';

interface ExpenseRecord {
  id: number;
  title: string;
  amount: number;
  category: string;
  category_name?: string;
  date: string;
  description?: string;
}

type ChartMode = 'bar' | 'line' | 'horizontal';
type SortField = 'date' | 'amount' | 'title' | 'category';
type SortDirection = 'asc' | 'desc';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit, DoCheck {
  readonly periods = ['This week', 'This month', 'Last month', 'This year'];
  readonly defaultCategoryNames = [
    'All',
    'Food',
    'Transport',
    'Shopping',
    'Entertainment',
    'Health',
    'Bills',
    'Education',
    'Other'
  ];

  readonly chartModes: { key: ChartMode; label: string }[] = [
    { key: 'bar', label: 'Bar' },
    { key: 'line', label: 'Line' },
    { key: 'horizontal', label: 'Horizontal' }
  ];

  selectedPeriod = 'This month';
  selectedCategory = 'All';
  searchQuery = '';
  selectedChartMode: ChartMode = 'bar';

  sortField: SortField = 'date';
  sortDirection: SortDirection = 'desc';

  expenses: ExpenseRecord[] = [];
  categories: string[] = ['All'];
  loading = false;

  currency = '₸';
  currentCurrencyCode = 'KZT';
  baseCurrencyCode = 'KZT';

  rates: Record<string, number> = {
    USD: 1,
    KZT: 515,
    RUB: 93,
    EUR: 0.88
  };

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.loadCurrency();
    this.loadExpenses();
    this.loadCategories();

    const savedMode = localStorage.getItem('reportsChartMode') as ChartMode | null;
    if (savedMode && ['bar', 'line', 'horizontal'].includes(savedMode)) {
      this.selectedChartMode = savedMode;
    }
  }

  ngDoCheck(): void {
    this.loadCurrency();
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
      case 'USD':
        return '$';
      case 'EUR':
        return '€';
      case 'RUB':
        return '₽';
      default:
        return '₸';
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
        this.expenses = Array.isArray(data) ? data : [];
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading report expenses', err);
        this.expenses = [];
        this.loading = false;
      }
    });
  }

  loadCategories(): void {
    this.dashboardService.getCategories().subscribe({
      next: (data) => {
        const apiCategories = Array.isArray(data)
          ? data.map(item => String(item.name || '').trim()).filter(Boolean)
          : [];
        const merged = [...this.defaultCategoryNames, ...apiCategories];
        this.categories = Array.from(new Set(merged));
      },
      error: (err) => {
        console.error('Error loading report categories', err);
        this.categories = [...this.defaultCategoryNames];
      }
    });
  }

  normalizedCategory(expense: ExpenseRecord): string {
    return expense.category_name || expense.category || 'Other';
  }

  periodStartEnd(): { start: Date; end: Date } {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    if (this.selectedPeriod === 'This week') {
      const start = new Date(today);
      const day = start.getDay();
      const diff = day === 0 ? 6 : day - 1;
      start.setDate(start.getDate() - diff);

      const end = new Date(start);
      end.setDate(start.getDate() + 6);
      end.setHours(23, 59, 59, 999);

      return { start, end };
    }

    if (this.selectedPeriod === 'This month') {
      const start = new Date(today.getFullYear(), today.getMonth(), 1);
      const end = new Date(today.getFullYear(), today.getMonth() + 1, 0);
      end.setHours(23, 59, 59, 999);
      return { start, end };
    }

    if (this.selectedPeriod === 'Last month') {
      const start = new Date(today.getFullYear(), today.getMonth() - 1, 1);
      const end = new Date(today.getFullYear(), today.getMonth(), 0);
      end.setHours(23, 59, 59, 999);
      return { start, end };
    }

    const start = new Date(today.getFullYear(), 0, 1);
    const end = new Date(today.getFullYear(), 11, 31);
    end.setHours(23, 59, 59, 999);
    return { start, end };
  }

  filteredExpenses(): ExpenseRecord[] {
    const { start, end } = this.periodStartEnd();
    const query = this.searchQuery.trim().toLowerCase();

    const filtered = this.expenses.filter(expense => {
      const expenseDate = new Date(expense.date);
      const category = this.normalizedCategory(expense);

      const withinPeriod = expenseDate >= start && expenseDate <= end;
      const matchesCategory = this.selectedCategory === 'All' || category === this.selectedCategory;
      const matchesSearch =
        !query ||
        String(expense.title || '').toLowerCase().includes(query) ||
        String(category).toLowerCase().includes(query) ||
        String(expense.description || '').toLowerCase().includes(query);

      return withinPeriod && matchesCategory && matchesSearch;
    });

    return filtered.sort((a, b) => this.compareExpenses(a, b));
  }

  compareExpenses(a: ExpenseRecord, b: ExpenseRecord): number {
    let result = 0;

    if (this.sortField === 'date') {
      result = new Date(a.date).getTime() - new Date(b.date).getTime();
    }

    if (this.sortField === 'amount') {
      result = Number(a.amount || 0) - Number(b.amount || 0);
    }

    if (this.sortField === 'title') {
      result = String(a.title || '').localeCompare(String(b.title || ''));
    }

    if (this.sortField === 'category') {
      result = this.normalizedCategory(a).localeCompare(this.normalizedCategory(b));
    }

    return this.sortDirection === 'asc' ? result : -result;
  }

  setSort(field: SortField): void {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      return;
    }

    this.sortField = field;
    this.sortDirection = field === 'title' || field === 'category' ? 'asc' : 'desc';
  }

  totalSpent(): number {
    return this.filteredExpenses().reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
  }

  avgAmount(): number {
    const items = this.filteredExpenses();
    return items.length ? this.totalSpent() / items.length : 0;
  }

  maxAmount(): number {
    const items = this.filteredExpenses();
    return items.length ? Math.max(...items.map(expense => Number(expense.amount || 0))) : 0;
  }

  formattedDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  }

  chartTitle(): string {
    return this.selectedPeriod === 'This year' ? 'Monthly expenses' : 'Period comparison';
  }

  comparisonData(): Array<{ label: string; amount: number; percent: number }> {
    const filtered = this.filteredExpenses();

    if (this.selectedPeriod === 'This week') {
      const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

      const grouped = labels.map((label, index) => {
        const amount = filtered
          .filter(expense => {
            const day = new Date(expense.date).getDay();
            const normalized = day === 0 ? 6 : day - 1;
            return normalized === index;
          })
          .reduce((sum, expense) => sum + Number(expense.amount || 0), 0);

        return { label, amount };
      });

      return this.withPercents(grouped);
    }

    if (this.selectedPeriod === 'This year') {
      const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

      const grouped = labels.map((label, index) => {
        const amount = filtered
          .filter(expense => new Date(expense.date).getMonth() === index)
          .reduce((sum, expense) => sum + Number(expense.amount || 0), 0);

        return { label, amount };
      });

      return this.withPercents(grouped);
    }

    if (this.selectedPeriod === 'This month' || this.selectedPeriod === 'Last month') {
      const grouped = [
        { label: 'Week 1', amount: 0 },
        { label: 'Week 2', amount: 0 },
        { label: 'Week 3', amount: 0 },
        { label: 'Week 4', amount: 0 },
        { label: 'Week 5', amount: 0 }
      ];

      filtered.forEach(expense => {
        const date = new Date(expense.date);
        const weekIndex = Math.min(4, Math.floor((date.getDate() - 1) / 7));
        grouped[weekIndex].amount += Number(expense.amount || 0);
      });

      return this.withPercents(grouped);
    }

    return this.withPercents([{ label: 'This week', amount: this.totalSpent() }]);
  }

  withPercents(items: Array<{ label: string; amount: number }>): Array<{ label: string; amount: number; percent: number }> {
    const max = Math.max(...items.map(item => item.amount), 1);

    return items.map(item => ({
      ...item,
      percent: Math.max(item.amount > 0 ? 12 : 8, Math.round((item.amount / max) * 100))
    }));
  }

  linePoints(): string {
    const items = this.comparisonData();
    if (!items.length) return '';

    const width = 760;
    const leftPad = 26;
    const rightPad = 26;
    const topPad = 18;
    const bottomY = 215;
    const usableWidth = width - leftPad - rightPad;
    const usableHeight = 160;

    return items.map((item, index) => {
      const x = leftPad + (usableWidth / Math.max(1, items.length - 1)) * index;
      const y = topPad + usableHeight - (usableHeight * item.percent) / 100;
      return `${x},${y}`;
    }).join(' ');
  }

  lineAreaPoints(): string {
    const items = this.comparisonData();
    if (!items.length) return '';

    const width = 760;
    const leftPad = 26;
    const rightPad = 26;
    const topPad = 18;
    const bottomY = 215;
    const usableWidth = width - leftPad - rightPad;
    const usableHeight = 160;

    const points = items.map((item, index) => {
      const x = leftPad + (usableWidth / Math.max(1, items.length - 1)) * index;
      const y = topPad + usableHeight - (usableHeight * item.percent) / 100;
      return `${x},${y}`;
    });

    const firstX = leftPad;
    const lastX = width - rightPad;

    return `${firstX},${bottomY} ${points.join(' ')} ${lastX},${bottomY}`;
  }

  lineDots(): Array<{ label: string; amount: number; x: number; y: number }> {
    const items = this.comparisonData();
    const width = 760;
    const leftPad = 26;
    const rightPad = 26;
    const topPad = 18;
    const usableWidth = width - leftPad - rightPad;
    const usableHeight = 160;

    return items.map((item, index) => ({
      label: item.label,
      amount: item.amount,
      x: leftPad + (usableWidth / Math.max(1, items.length - 1)) * index,
      y: topPad + usableHeight - (usableHeight * item.percent) / 100
    }));
  }

  deleteExpense(id: number): void {
    this.dashboardService.deleteExpense(id).subscribe({
      next: () => {
        this.expenses = this.expenses.filter(expense => expense.id !== id);
      },
      error: (err) => {
        console.error('Error deleting report expense', err);
      }
    });
  }

  exportCSV(): void {
    const rows = [['Title', 'Category', 'Date', 'Amount', 'Description']];

    this.filteredExpenses().forEach(expense =>
      rows.push([
        expense.title,
        this.normalizedCategory(expense),
        this.formattedDate(expense.date),
        String(this.convertAmount(expense.amount).toFixed(2)),
        expense.description || ''
      ])
    );

    const csv = rows
      .map(row => row.map(value => `"${String(value).replace(/"/g, '""')}"`).join(','))
      .join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = `expenses-${this.selectedPeriod.toLowerCase().replace(/\s+/g, '-')}.csv`;
    link.click();

    URL.revokeObjectURL(url);
  }

  categoryEmoji(cat: string): string {
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

    return emojiMap[cat] || '💰';
  }

  categoryBg(cat: string): string {
    const colorMap: Record<string, string> = {
      Food: '#e8f5e9',
      Transport: '#e3f2fd',
      Entertainment: '#f3e5f5',
      Shopping: '#fff3e0',
      Health: '#e0f2f1',
      Bills: '#ede7f6',
      Education: '#fce4ec',
      Other: '#f5f5f5'
    };

    return colorMap[cat] || '#f5f5f5';
  }

  categoryColor(cat: string): string {
    const colorMap: Record<string, string> = {
      Food: '#2e7d32',
      Transport: '#1565c0',
      Entertainment: '#6a1b9a',
      Shopping: '#e65100',
      Health: '#00695c',
      Bills: '#5e35b1',
      Education: '#ad1457',
      Other: '#424242'
    };

    return colorMap[cat] || '#424242';
  }

  money(amount: number | null | undefined): string {
    return `${this.currency}${this.formatAmount(amount)}`;
  }

  expenseMoney(amount: number | null | undefined): string {
    return `-${this.currency}${this.formatAmount(amount)}`;
  }
}