import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';


interface Expense {
  id: number;
  title: string;
  amount: number;
  category: string;
  date: string;
}

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReportsComponent {
  selectedPeriod = 'This month';
  selectedCategory = 'All';
  searchQuery = '';

  periods = ['This week', 'This month', 'Last month', 'This year'];

  expenses: Expense[] = [
    { id: 1, title: 'Groceries', amount: 85, category: 'Food', date: 'Apr 10, 2026' },
    { id: 2, title: 'Uber', amount: 32, category: 'Transport', date: 'Apr 9, 2026' },
    { id: 3, title: 'Netflix', amount: 15, category: 'Entertainment', date: 'Apr 8, 2026' },
    { id: 4, title: 'Gym', amount: 50, category: 'Health', date: 'Apr 7, 2026' },
    { id: 5, title: 'Amazon', amount: 120, category: 'Shopping', date: 'Apr 6, 2026' },
    { id: 6, title: 'Restaurant', amount: 65, category: 'Food', date: 'Apr 5, 2026' },
    { id: 7, title: 'Bus pass', amount: 20, category: 'Transport', date: 'Apr 4, 2026' },
    { id: 8, title: 'Pharmacy', amount: 40, category: 'Health', date: 'Apr 3, 2026' },
  ];

  comparisonData = [
    { month: 'Jan', amount: 320, percent: 40 },
    { month: 'Feb', amount: 480, percent: 60 },
    { month: 'Mar', amount: 390, percent: 49 },
    { month: 'Apr', amount: 427, percent: 53 },
    { month: 'May', amount: 520, percent: 65 },
    { month: 'Jun', amount: 610, percent: 76 },
  ];

  filteredExpenses() {
    return this.expenses.filter(e => {
      const matchCat = this.selectedCategory === 'All' || e.category === this.selectedCategory;
      const matchSearch = e.title.toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }

  totalSpent() { return this.filteredExpenses().reduce((s, e) => s + e.amount, 0); }
  avgAmount() { const f = this.filteredExpenses(); return f.length ? Math.round(this.totalSpent() / f.length) : 0; }
  maxAmount() { return this.filteredExpenses().length ? Math.max(...this.filteredExpenses().map(e => e.amount)) : 0; }

  deleteExpense(id: number) { this.expenses = this.expenses.filter(e => e.id !== id); }

  exportCSV() {
    const rows = [['Title', 'Category', 'Date', 'Amount']];
    this.filteredExpenses().forEach(e => rows.push([e.title, e.category, e.date, String(e.amount)]));
    const csv = rows.map(r => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'expenses.csv';
    a.click();
  }

  categoryEmoji(cat: string): string {
    const e: Record<string, string> = { Food: '🍔', Transport: '🚗', Entertainment: '🎬', Shopping: '🛍️', Health: '💊', Other: '📦' };
    return e[cat] || '💰';
  }

  categoryBg(cat: string): string {
    const c: Record<string, string> = { Food: '#e8f5e9', Transport: '#e3f2fd', Entertainment: '#f3e5f5', Shopping: '#fff3e0', Health: '#e0f2f1', Other: '#f5f5f5' };
    return c[cat] || '#f5f5f5';
  }

  categoryColor(cat: string): string {
    const c: Record<string, string> = { Food: '#2e7d32', Transport: '#1565c0', Entertainment: '#6a1b9a', Shopping: '#e65100', Health: '#00695c', Other: '#424242' };
    return c[cat] || '#424242';
  }
}