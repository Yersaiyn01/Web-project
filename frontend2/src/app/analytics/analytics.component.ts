import { Component, ViewEncapsulation } from '@angular/core';

interface Expense {
  id: number;
  title: string;
  amount: number;
  category: string;
}

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AnalyticsComponent {
  pieColors = ['#00cc55', '#2196F3', '#9C27B0', '#FF9800', '#F44336', '#009688'];
  periods = ['Week', 'Month', 'Quarter', 'Year'];
  activePeriod = 'Month';

  expenses: Expense[] = [
    { id: 1, title: 'Groceries', amount: 85, category: 'Food' },
    { id: 2, title: 'Uber', amount: 32, category: 'Transport' },
    { id: 3, title: 'Netflix', amount: 15, category: 'Entertainment' },
    { id: 4, title: 'Gym', amount: 50, category: 'Health' },
    { id: 5, title: 'Amazon', amount: 120, category: 'Shopping' },
    { id: 6, title: 'Restaurant', amount: 65, category: 'Food' },
    { id: 7, title: 'Bus pass', amount: 20, category: 'Transport' },
    { id: 8, title: 'Pharmacy', amount: 40, category: 'Health' },
  ];

  weeklyData = [
    { day: 'Mon', amount: 45, percent: 45, isToday: false },
    { day: 'Tue', amount: 80, percent: 80, isToday: false },
    { day: 'Wed', amount: 30, percent: 30, isToday: false },
    { day: 'Thu', amount: 95, percent: 95, isToday: false },
    { day: 'Fri', amount: 60, percent: 60, isToday: false },
    { day: 'Sat', amount: 75, percent: 75, isToday: true },
    { day: 'Sun', amount: 20, percent: 20, isToday: false },
  ];

  totalSpent() { return this.expenses.reduce((s, e) => s + e.amount, 0); }
  dailyAvg() { return Math.round(this.totalSpent() / 30); }
  forecast() { return Math.round(this.dailyAvg() * 30); }
  weeklyTotal() { return this.weeklyData.reduce((s, w) => s + w.amount, 0); }
  topCategory() { return this.categoryTotals()[0]?.name || '—'; }
  topCategoryPct() { return this.categoryTotals()[0]?.percent || 0; }
  thisMonthPct() { return Math.min(Math.round((this.totalSpent() / 500) * 100), 100); }

  categoryTotals() {
    const map: Record<string, { total: number; count: number }> = {};
    this.expenses.forEach(e => {
      if (!map[e.category]) map[e.category] = { total: 0, count: 0 };
      map[e.category].total += e.amount;
      map[e.category].count++;
    });
    const total = this.totalSpent() || 1;
    return Object.entries(map)
      .map(([name, v]) => ({ name, total: v.total, count: v.count, percent: Math.round((v.total / total) * 100) }))
      .sort((a, b) => b.total - a.total);
  }

  savingsTips() {
    return this.categoryTotals().slice(0, 4).map(cat => ({
      category: cat.name,
      saving: Math.round(cat.total * 0.2),
      percent: cat.percent
    }));
  }

  totalPotentialSavings() {
    return this.savingsTips().reduce((s, t) => s + t.saving, 0);
  }

  pieSlices() {
    const cats = this.categoryTotals();
    const total = this.totalSpent();
    let startAngle = -Math.PI / 2;
    return cats.map(cat => {
      const angle = (cat.total / total) * 2 * Math.PI;
      const endAngle = startAngle + angle;
      const x1 = 100 + 90 * Math.cos(startAngle);
      const y1 = 100 + 90 * Math.sin(startAngle);
      const x2 = 100 + 90 * Math.cos(endAngle);
      const y2 = 100 + 90 * Math.sin(endAngle);
      const largeArc = angle > Math.PI ? 1 : 0;
      const path = `M 100 100 L ${x1} ${y1} A 90 90 0 ${largeArc} 1 ${x2} ${y2} Z`;
      startAngle = endAngle;
      return { category: cat.name, path };
    });
  }

  categoryEmoji(cat: string): string {
    const e: Record<string, string> = {
      Food: '🍔', Transport: '🚗', Entertainment: '🎬',
      Shopping: '🛍️', Health: '💊', Other: '📦'
    };
    return e[cat] || '💰';
  }
}