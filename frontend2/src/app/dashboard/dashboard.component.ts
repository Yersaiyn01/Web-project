import { Component, OnInit, DoCheck, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../_services/dashboard.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as Papa from 'papaparse';
import * as pdfjsLib from 'pdfjs-dist';

(pdfjsLib as any).GlobalWorkerOptions.workerSrc =
  'https://cdn.jsdelivr.net/npm/pdfjs-dist@5.6.205/build/pdf.worker.min.mjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, DoCheck {
  @ViewChild('kaspiFileInput') kaspiFileInput!: ElementRef<HTMLInputElement>;

  Math = Math;
  currency = '₸';
  currentCurrencyCode = 'KZT';
  baseCurrencyCode = 'KZT';

  rates: Record<string, number> = {
    USD: 1,
    KZT: 515,
    RUB: 93,
    EUR: 0.88
  };

  readonly defaultCategoryNames = [
    'Food',
    'Transport',
    'Shopping',
    'Entertainment',
    'Health',
    'Bills',
    'Education',
    'Other'
  ];

  showGoalModal = false;
  showForm = false;
  searchQuery = '';
  aiTip = 'Track your weekly spending and reduce your top category to save more each month.';
  expenseErrorMessage = '';
  expenseSuccessMessage = '';
  exportOpen = false;

  kaspiImporting = false;
  kaspiImportMessage = '';
  kaspiImportError = '';

  expenses: any[] = [];
  categories: any[] = [];
  weeklyData: any[] = [];

  analytics: any = {
    summary: {
      total_spent: 0,
      total_income: 0,
      daily_average: 0,
      month_forecast: 0,
      balance: 0,
      transactions_this_week: 0,
      savings_rate: 0
    },
    top_category: {
      name: 'No data',
      amount: 0,
      percent: 0
    },
    weekly_spending: [],
    category_breakdown: [],
    month_comparison: {
      percent_change: 0
    },
    weekly_comparison: {
      percent_change: 0
    },
    transaction_comparison: {
      percent_change: 0
    }
  };

  newExpense: any = {
    title: '',
    amount: null,
    category: null,
    date: this.todayString(),
    description: ''
  };

  dreamOptions: any[] = [
    { label: 'Trip', emoji: '✈️' },
    { label: 'Phone', emoji: '📱' },
    { label: 'Car', emoji: '🚗' },
    { label: 'Laptop', emoji: '💻' },
    { label: 'House', emoji: '🏠' },
    { label: 'Study', emoji: '🎓' }
  ];

  goalForm: any = {
    salary: null,
    dreamLabel: '',
    dreamEmoji: '',
    amount: null,
    months: 12
  };

  profile: any = null;
  savedAmount = 0;
  addSavingAmount: number | null = null;

  constructor(
    private dashboardService: DashboardService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCurrency();
    this.loadGoalFromStorage();
    this.loadExpenses();
    this.loadCategories();
    this.loadAnalytics();
  }

  ngDoCheck(): void {
    this.loadCurrency();
  }

  @HostListener('document:click')
  onDocumentClick(): void {
    this.exportOpen = false;
  }

  get categoryBreakdownSafe(): any[] {
    return Array.isArray(this.analytics?.category_breakdown)
      ? this.analytics.category_breakdown
      : [];
  }

  toggleExportMenu(event?: Event): void {
    event?.stopPropagation();
    this.exportOpen = !this.exportOpen;
  }

  closeExportMenu(): void {
    this.exportOpen = false;
  }

  viewReport(): void {
    this.router.navigate(['/reports']);
  }

  openKaspiImport(): void {
    this.kaspiImportError = '';
    this.kaspiImportMessage = '';
    this.kaspiFileInput?.nativeElement.click();
  }

  async onKaspiFileSelected(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    this.kaspiImporting = true;
    this.kaspiImportError = '';
    this.kaspiImportMessage = '';

    try {
      const ext = file.name.split('.').pop()?.toLowerCase();
      let parsedRows: any[] = [];

      if (ext === 'csv') {
        parsedRows = await this.parseKaspiCsv(file);
      } else if (ext === 'pdf') {
        parsedRows = await this.parseKaspiPdf(file);
      } else if (ext === 'txt') {
        const text = await file.text();
        parsedRows = this.parseKaspiStatementText(text);
      } else {
        throw new Error('Use CSV, PDF or TXT file.');
      }

      const safeRows = Array.isArray(parsedRows) ? parsedRows : [];
      const cleaned = safeRows.filter((row: any) => row && row.title && row.amount > 0);

      if (!cleaned.length) {
        throw new Error('No valid transactions found in file.');
      }

      await this.saveImportedTransactions(cleaned);

      this.kaspiImportMessage = `Imported ${cleaned.length} transaction(s).`;
      this.loadExpenses();
      this.loadAnalytics();
    } catch (err: any) {
      console.error(err);
      this.kaspiImportError = err?.message || 'Could not import Kaspi file.';
    } finally {
      this.kaspiImporting = false;
      input.value = '';
    }
  }

  parseKaspiCsv(file: File): Promise<any[]> {
    return new Promise((resolve, reject) => {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (results: Papa.ParseResult<any>) => {
          const safeData = Array.isArray(results.data) ? results.data : [];

          if (results.errors && results.errors.length) {
            reject(new Error('CSV parse error.'));
            return;
          }

          const rows = safeData
            .map((row: any) => this.normalizeKaspiCsvRow(row))
            .filter((row: any) => !!row);

          resolve(rows);
        },
        error: (error: Error) => reject(error)
      });
    });
  }

  async parseKaspiPdf(file: File): Promise<any[]> {
    const arrayBuffer = await file.arrayBuffer();
    const loadingTask = (pdfjsLib as any).getDocument({ data: new Uint8Array(arrayBuffer) });
    const pdf = await loadingTask.promise;

    const pageTexts: string[] = [];

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const textContent = await page.getTextContent();
      const items = Array.isArray(textContent?.items) ? textContent.items : [];
      const text = items.map((item: any) => String(item?.str || '')).join('\n');
      pageTexts.push(text);
    }

    return this.parseKaspiStatementText(pageTexts.join('\n'));
  }

  normalizeKaspiCsvRow(row: any): any | null {
    const keys = Object.keys(row || {});
    const pick = (...names: string[]) => {
      const found = keys.find(k => names.some(n => k.toLowerCase().includes(n.toLowerCase())));
      return found ? row[found] : null;
    };

    const rawDate = pick('date', 'дата');
    const rawAmount = pick('amount', 'sum', 'сумма');
    const rawOperation = pick('operation', 'операция');
    const rawDetails = pick('details', 'merchant', 'description', 'детали', 'описание');

    const amount = this.parseKaspiAmount(rawAmount);
    const operation = String(rawOperation || '').trim();
    const details = String(rawDetails || '').trim();

    if (!amount || !operation || !details) return null;

    return this.buildKaspiTransaction(
      this.normalizeKaspiDate(String(rawDate || this.todayString())),
      amount,
      operation,
      details
    );
  }

  parseKaspiStatementText(text: string): any[] {
    const normalized = String(text || '').replace(/\r/g, '\n');

    const regex = /(\d{2}\.\d{2}\.\d{2})\s+([+-])\s*([\d\s]+,\d{2})\s*₸\s+(Покупка|Перевод|Пополнение)\s+(.+?)(?=\s+\d{2}\.\d{2}\.\d{2}\s+[+-]\s*[\d\s]+,\d{2}\s*₸\s+(?:Покупка|Перевод|Пополнение)|$)/gsu;

    const rows: any[] = [];
    let match: RegExpExecArray | null;

    while ((match = regex.exec(normalized)) !== null) {
      const rawDate = match[1];
      const sign = match[2];
      const rawAmount = match[3];
      const operation = match[4];
      const details = match[5].replace(/\s+/g, ' ').trim();

      const amount = this.parseKaspiAmount(rawAmount);
      if (!amount) continue;

      const built = this.buildKaspiTransaction(
        this.normalizeKaspiDate(rawDate),
        sign === '-' ? amount : amount,
        operation,
        details
      );

      if (built) {
        rows.push(built);
      }
    }

    return rows;
  }

  buildKaspiTransaction(date: string, amount: number, operation: string, details: string): any | null {
    const op = operation.toLowerCase();
    const title = details.trim();

    if (op === 'покупка') {
      return {
        title,
        amount,
        category: this.detectCategory(title),
        date,
        description: `Imported from Kaspi: ${operation}`
      };
    }

    if (op === 'перевод') {
      if (/kaspi депозит/i.test(title)) {
        return {
          title,
          amount,
          category: 'Other',
          date,
          description: 'Imported from Kaspi: Savings transfer'
        };
      }

      return {
        title,
        amount,
        category: 'Other',
        date,
        description: `Imported from Kaspi: ${operation}`
      };
    }

    return null;
  }

  parseKaspiAmount(value: any): number {
    const cleaned = String(value || '')
      .replace(/[^\d,.-]/g, '')
      .replace(/\s/g, '')
      .replace(',', '.');

    const parsed = Number(cleaned);
    return isNaN(parsed) ? 0 : Math.abs(parsed);
  }

  normalizeKaspiDate(value: string): string {
    const iso = String(value || '').trim();

    if (/^\d{4}-\d{2}-\d{2}$/.test(iso)) return iso;

    const m1 = iso.match(/^(\d{2})\.(\d{2})\.(\d{2})$/);
    if (m1) {
      const [, dd, mm, yy] = m1;
      return `20${yy}-${mm}-${dd}`;
    }

    const m2 = iso.match(/^(\d{2})[./-](\d{2})[./-](\d{2,4})$/);
    if (m2) {
      const [, dd, mm, yy] = m2;
      const year = yy.length === 2 ? `20${yy}` : yy;
      return `${year}-${mm}-${dd}`;
    }

    return this.todayString();
  }

  detectCategory(text: string): string {
    const t = text.toLowerCase();

    if (/зейтун|magnum|spar|акбаров|dala trade|maki maki|столовая|живая вода|yandex\.eda|магазин|супермаркет|кафе|ресторан|food/i.test(t)) {
      return 'Food';
    }

    if (/onay|проезд|transport|taxi|uber|yandex go/i.test(t)) {
      return 'Transport';
    }

    if (/steam|langame|cyber club|di bro|yandex\.plus|entertainment|game/i.test(t)) {
      return 'Entertainment';
    }

    if (/ауырма жаным|медицин/i.test(t)) {
      return 'Health';
    }

    if (/delta-print|education|study|kbtu/i.test(t)) {
      return 'Education';
    }

    return 'Other';
  }

  async saveImportedTransactions(items: any[]): Promise<void> {
    const safeItems = Array.isArray(items) ? items : [];

    for (const item of safeItems) {
      await new Promise<void>((resolve, reject) => {
        this.dashboardService.addExpense({
          title: item.title,
          amount: item.amount,
          category: item.category,
          date: item.date,
          description: item.description || ''
        }).subscribe({
          next: () => resolve(),
          error: (err) => reject(err)
        });
      });
    }
  }

  exportPDF(): void {
    this.closeExportMenu();

    const doc = new jsPDF();

    const totalSpent = this.money(this.totalExpenses());
    const totalTransactions = this.filteredExpenses().length;
    const topCategory = this.biggestCategory();
    const today = new Date().toLocaleString();

    doc.setFontSize(20);
    doc.text('Expense Report', 14, 18);

    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text(`Generated: ${today}`, 14, 26);

    doc.setFontSize(12);
    doc.setTextColor(20);
    doc.text(`Total spent: ${totalSpent}`, 14, 38);
    doc.text(`Transactions: ${totalTransactions}`, 14, 46);
    doc.text(`Top category: ${topCategory}`, 14, 54);

    const body = this.filteredExpenses().map((item, index) => [
      String(index + 1),
      item.title || '-',
      item.category_name || item.category || '-',
      item.date || '-',
      this.money(item.amount)
    ]);

    autoTable(doc, {
      startY: 62,
      head: [['#', 'Title', 'Category', 'Date', 'Amount']],
      body: body.length ? body : [['-', 'No transactions', '-', '-', '-']],
      theme: 'grid',
      headStyles: { fillColor: [0, 204, 85] },
      styles: { fontSize: 10 }
    });

    doc.save(`expense-report-${this.getTodayForFile()}.pdf`);
  }

  exportCSV(): void {
    this.closeExportMenu();

    const headers = ['Title', 'Category', 'Date', 'Amount', 'Description'];

    const rows = this.filteredExpenses().map(item => [
      item.title || '',
      item.category_name || item.category || '',
      item.date || '',
      this.money(item.amount),
      item.description || ''
    ]);

    const csv = [headers, ...rows]
      .map(row => row.map(value => `"${String(value).replace(/"/g, '""')}"`).join(','))
      .join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');

    a.href = url;
    a.download = `expense-report-${this.getTodayForFile()}.csv`;
    a.click();

    URL.revokeObjectURL(url);
  }

  printReport(): void {
    this.closeExportMenu();
    window.print();
  }

  getTodayForFile(): string {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const d = String(now.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
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

  todayString(): string {
    return new Date().toISOString().split('T')[0];
  }

  loadGoalFromStorage(): void {
    const savedProfile = localStorage.getItem('userProfile');
    const savedAmount = localStorage.getItem('savedAmount');

    if (savedProfile) this.profile = JSON.parse(savedProfile);
    if (savedAmount) this.savedAmount = +savedAmount;
  }

  loadExpenses(): void {
    this.dashboardService.getExpenses().subscribe({
      next: (data) => {
        this.expenses = Array.isArray(data) ? data : [];
      },
      error: (err) => {
        console.error('Error loading expenses', err);
        this.expenses = [];
      }
    });
  }

  loadCategories(): void {
    this.dashboardService.getCategories().subscribe({
      next: (data) => {
        this.categories = Array.isArray(data)
          ? data
          : this.defaultCategoryNames.map((name, index) => ({ id: index + 1, name }));
      },
      error: (err) => {
        console.error('Error loading categories', err);
        this.categories = this.defaultCategoryNames.map((name, index) => ({ id: index + 1, name }));
      }
    });
  }

  loadAnalytics(): void {
    this.dashboardService.getAnalytics().subscribe({
      next: (data) => {
        this.analytics = data || this.analytics;
        this.weeklyData = this.mapWeeklyData(data?.weekly_spending || []);
      },
      error: (err) => {
        console.error('Error loading analytics', err);
        this.weeklyData = [];
      }
    });
  }

  mapWeeklyData(raw: any): any[] {
    const safeRaw = Array.isArray(raw) ? raw : [];

    const converted = safeRaw.map((item: any) => ({
      day: item?.day || '',
      amount: this.convertAmount(Number(item?.amount) || 0)
    }));

    const maxAmount = Math.max(...converted.map((x: any) => Number(x.amount) || 0), 1);

    return converted.map((item: any) => ({
      day: item.day,
      amount: Number(item.amount) || 0,
      percent: Math.max(12, ((Number(item.amount) || 0) / maxAmount) * 100)
    }));
  }

  totalExpenses(): number {
    return Number(this.analytics?.summary?.total_spent || 0);
  }

  totalIncome(): number {
    return Number(this.analytics?.summary?.total_income || 0);
  }

  totalTransactionsThisWeek(): number {
    return Number(this.analytics?.summary?.transactions_this_week || 0);
  }

  savingsRate(): number {
    return Math.max(0, Number(this.analytics?.summary?.savings_rate || 0));
  }

  topCategories(): any[] {
    return this.categoryBreakdownSafe
      .slice(0, 5)
      .map((cat: any) => ({
        ...cat,
        total: Number(cat?.total || cat?.amount || 0)
      }));
  }

  biggestCategory(): string {
    return this.analytics?.top_category?.name || 'No data';
  }

  monthTrend(): number {
    return Number(this.analytics?.month_comparison?.percent_change || 0);
  }

  weeklyTrend(): number {
    return Number(this.analytics?.weekly_comparison?.percent_change || 0);
  }

  transactionTrend(): number {
    return Number(this.analytics?.transaction_comparison?.percent_change || 0);
  }

  trendLabel(value: number): string {
    return `${value >= 0 ? '+' : ''}${value.toFixed(1)}%`;
  }

  trendClass(value: number): string {
    return value >= 0 ? 'up' : 'down';
  }

  filteredExpenses(): any[] {
    const safeExpenses = Array.isArray(this.expenses) ? this.expenses : [];
    const q = this.searchQuery.trim().toLowerCase();

    if (!q) return safeExpenses;

    return safeExpenses.filter((exp: any) =>
      String(exp?.title || '').toLowerCase().includes(q) ||
      String(exp?.category_name || exp?.category || '').toLowerCase().includes(q)
    );
  }

  addExpense(): void {
    this.expenseErrorMessage = '';
    this.expenseSuccessMessage = '';

    if (!this.newExpense.title || !this.newExpense.amount || !this.newExpense.category) {
      this.expenseErrorMessage = 'Fill in title, amount and category.';
      return;
    }

    const payload = {
      title: this.newExpense.title,
      amount: this.newExpense.amount,
      category: this.newExpense.category,
      date: this.newExpense.date,
      description: this.newExpense.description
    };

    this.dashboardService.addExpense(payload).subscribe({
      next: () => {
        const selectedCategory = this.newExpense.category;
        const selectedDate = this.newExpense.date;

        this.newExpense = {
          title: '',
          amount: null,
          category: selectedCategory,
          date: selectedDate || this.todayString(),
          description: ''
        };

        this.showForm = true;
        this.expenseSuccessMessage = 'Transaction added. You can add the next one.';
        this.loadExpenses();
        this.loadAnalytics();
      },
      error: (err) => {
        console.error('Error adding expense', err);
        this.expenseErrorMessage =
          err?.error?.category?.[0] ||
          err?.error?.detail ||
          'Could not add transaction.';
      }
    });
  }

  deleteExpense(id: number): void {
    this.dashboardService.deleteExpense(id).subscribe({
      next: () => {
        this.loadExpenses();
        this.loadAnalytics();
      },
      error: (err) => {
        console.error('Error deleting expense', err);
      }
    });
  }

  categoryEmoji(name: string): string {
    const val = (name || '').toLowerCase();
    if (val.includes('food')) return '🍔';
    if (val.includes('transport')) return '🚕';
    if (val.includes('health')) return '💊';
    if (val.includes('shopping')) return '🛍️';
    if (val.includes('entertainment')) return '🎮';
    return '💸';
  }

  categoryColor(name: string): string {
    const val = (name || '').toLowerCase();
    if (val.includes('food')) return '#163d24';
    if (val.includes('transport')) return '#1f3c88';
    if (val.includes('health')) return '#6b1f3a';
    if (val.includes('shopping')) return '#5a2d82';
    if (val.includes('entertainment')) return '#7a4b00';
    return '#1d7a46';
  }

  goalMonthlySaving(): number {
    if (!this.goalForm.amount || !this.goalForm.months) return 0;
    return this.goalForm.amount / this.goalForm.months;
  }

  saveGoal(): void {
    this.profile = {
      salary: this.goalForm.salary,
      currency: this.currency,
      monthlySaving: this.goalMonthlySaving(),
      dream: {
        label: this.goalForm.dreamLabel,
        emoji: this.goalForm.dreamEmoji,
        amount: this.goalForm.amount,
        months: this.goalForm.months
      }
    };

    localStorage.setItem('userProfile', JSON.stringify(this.profile));
    localStorage.setItem('savedAmount', String(this.savedAmount));
  }

  resetGoal(): void {
    this.profile = null;
    this.savedAmount = 0;
    localStorage.removeItem('userProfile');
    localStorage.removeItem('savedAmount');
  }

  goalProgress(): number {
    if (!this.profile?.dream?.amount) return 0;
    const target = Number(this.profile.dream.amount || 0);
    const saved = Number(this.savedAmount || 0);

    if (!target) return 0;

    return Math.min(100, Math.round((saved / target) * 100));
  }

  monthsLeft(): number {
    if (!this.profile?.dream?.months) return 0;
    const done = this.goalProgress();
    const leftPercent = 100 - done;
    return Math.ceil((this.profile.dream.months * leftPercent) / 100);
  }

  goalAdvice(): string {
    if (!this.profile) return 'Create a goal to see personalized advice.';
    const progress = this.goalProgress();

    if (progress >= 100) return 'Goal achieved! Great job.';
    if (progress >= 70) return 'You are very close to your goal. Keep going.';
    if (progress >= 40) return 'Good progress. Stay consistent with savings.';
    return 'Try to reduce spending in your top category to save faster.';
  }

  addSaving(): void {
    if (!this.addSavingAmount || this.addSavingAmount <= 0) return;
    this.savedAmount += this.addSavingAmount;
    localStorage.setItem('savedAmount', String(this.savedAmount));
    this.addSavingAmount = null;
  }

  budgetCompleted(): number {
    return this.goalProgress();
  }

  budgetPending(): number {
    return Math.max(0, 100 - this.goalProgress());
  }

  money(amount: number | null | undefined): string {
    return `${this.currency}${this.formatAmount(amount)}`;
  }

  expenseMoney(amount: number | null | undefined): string {
    return `-${this.currency}${this.formatAmount(amount)}`;
  }

  goalMoney(amount: number | null | undefined): string {
    return `${this.currency}${this.formatAmount(amount)}`;
  }
}