import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../_services/dashboard.service';
import { GoalService } from '../_services/goal.service';

interface Expense {
  id: number;
  title: string;
  amount: number;
  category: string;
  category_name?: string;
  date: string;
}

interface AdviceCard {
  tone: 'good' | 'warn' | 'alert' | 'info';
  title: string;
  text: string;
  impact: string;
  action: string;
}

interface OpportunityCard {
  category: string;
  amount: number;
  percent: number;
  saving: number;
}

@Component({
  selector: 'app-ai-advisor',
  templateUrl: './ai-advisor.component.html',
  styleUrls: ['./ai-advisor.component.css']
})
export class AiAdvisorComponent implements OnInit {
  loading = false;
  activePeriod: 'month' | 'quarter' | 'year' = 'month';
  allExpenses: Expense[] = [];
  analytics: any = null;
  settings: any = null;
  goalProfile: any = null;
  savedAmount = 0;

  constructor(
    private dashboardService: DashboardService,
    private goalService: GoalService
  ) {}

  ngOnInit(): void {
    this.settings = this.goalService.getSettings();
    this.goalService.syncProfileWithSettings();
    this.goalProfile = this.goalService.getProfile();
    this.savedAmount = this.goalService.getSavedAmount();
    this.loadData();
  }

  loadData(): void {
    this.loading = true;

    this.dashboardService.getExpenses().subscribe({
      next: (expenses) => {
        this.allExpenses = Array.isArray(expenses) ? expenses : [];
        this.dashboardService.getAnalytics().subscribe({
          next: (analytics) => {
            this.analytics = analytics || null;
            this.loading = false;
          },
          error: () => {
            this.analytics = null;
            this.loading = false;
          }
        });
      },
      error: () => {
        this.allExpenses = [];
        this.analytics = null;
        this.loading = false;
      }
    });
  }

  setPeriod(period: 'month' | 'quarter' | 'year'): void {
    this.activePeriod = period;
  }

  today(): Date {
    return new Date();
  }

  startOfDay(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

  endOfDay(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999);
  }

  currentRange(): { start: Date; end: Date } {
    const now = this.today();

    if (this.activePeriod === 'month') {
      return {
        start: new Date(now.getFullYear(), now.getMonth(), 1),
        end: this.endOfDay(new Date(now.getFullYear(), now.getMonth() + 1, 0))
      };
    }

    if (this.activePeriod === 'quarter') {
      const quarterStartMonth = Math.floor(now.getMonth() / 3) * 3;
      return {
        start: new Date(now.getFullYear(), quarterStartMonth, 1),
        end: this.endOfDay(new Date(now.getFullYear(), quarterStartMonth + 3, 0))
      };
    }

    return {
      start: new Date(now.getFullYear(), 0, 1),
      end: this.endOfDay(new Date(now.getFullYear(), 11, 31))
    };
  }

  previousRange(): { start: Date; end: Date } {
    const current = this.currentRange();

    if (this.activePeriod === 'month') {
      return {
        start: new Date(current.start.getFullYear(), current.start.getMonth() - 1, 1),
        end: this.endOfDay(new Date(current.start.getFullYear(), current.start.getMonth(), 0))
      };
    }

    if (this.activePeriod === 'quarter') {
      return {
        start: new Date(current.start.getFullYear(), current.start.getMonth() - 3, 1),
        end: this.endOfDay(new Date(current.start.getFullYear(), current.start.getMonth(), 0))
      };
    }

    return {
      start: new Date(current.start.getFullYear() - 1, 0, 1),
      end: this.endOfDay(new Date(current.start.getFullYear() - 1, 11, 31))
    };
  }

  expensesInRange(range: { start: Date; end: Date }): Expense[] {
    return this.allExpenses.filter((expense) => {
      const expenseDate = new Date(expense.date);
      return expenseDate >= range.start && expenseDate <= range.end;
    });
  }

  normalizedCategory(expense: Expense): string {
    return expense.category_name || expense.category || 'Other';
  }

  filteredExpenses(): Expense[] {
    return this.expensesInRange(this.currentRange());
  }

  previousExpenses(): Expense[] {
    return this.expensesInRange(this.previousRange());
  }

  totalSpent(): number {
    return this.filteredExpenses().reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
  }

  previousSpent(): number {
    return this.previousExpenses().reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
  }

  transactionCount(): number {
    return this.filteredExpenses().length;
  }

  averageTransaction(): number {
    return this.transactionCount() ? Math.round(this.totalSpent() / this.transactionCount()) : 0;
  }

  dayCountInPeriod(): number {
    const { start, end } = this.currentRange();
    return Math.max(1, Math.round((end.getTime() - start.getTime()) / 86400000) + 1);
  }

  dailyAverage(): number {
    return Math.round(this.totalSpent() / this.dayCountInPeriod());
  }

  previousDailyAverage(): number {
    const previous = this.previousExpenses();
    if (!previous.length) return 0;
    const range = this.previousRange();
    const days = Math.max(1, Math.round((range.end.getTime() - range.start.getTime()) / 86400000) + 1);
    return Math.round(this.previousSpent() / days);
  }

  changePercent(current: number, previous: number): number {
    if (!previous) return current > 0 ? 100 : 0;
    return Math.round(((current - previous) / previous) * 100);
  }

  topCategories(limit = 4): Array<{ name: string; total: number; percent: number; count: number }> {
    const grouped: Record<string, { total: number; count: number }> = {};

    this.filteredExpenses().forEach((expense) => {
      const category = this.normalizedCategory(expense);
      if (!grouped[category]) grouped[category] = { total: 0, count: 0 };
      grouped[category].total += Number(expense.amount || 0);
      grouped[category].count += 1;
    });

    const total = this.totalSpent() || 1;

    return Object.entries(grouped)
      .map(([name, value]) => ({
        name,
        total: Math.round(value.total),
        count: value.count,
        percent: Math.round((value.total / total) * 100)
      }))
      .sort((a, b) => b.total - a.total)
      .slice(0, limit);
  }

  strongestCategory(): string {
    return this.topCategories(1)[0]?.name || 'Balanced';
  }

  monthlySalary(): number {
    return Number(this.settings?.form?.salary || this.goalProfile?.salary || 0);
  }

  monthlyBudgetLeft(): number {
    return Math.max(this.monthlySalary() - this.totalSpent(), 0);
  }

  budgetUsagePercent(): number {
    const salary = this.monthlySalary();
    if (!salary) return 0;
    return Math.min(100, Math.round((this.totalSpent() / salary) * 100));
  }

  healthScore(): number {
    const salary = this.monthlySalary();
    const spent = this.totalSpent();
    const topShare = this.topCategories(1)[0]?.percent || 0;
    const growthPenalty = Math.max(0, this.changePercent(spent, this.previousSpent()));

    let score = 82;

    if (salary > 0) {
      const usage = spent / salary;
      if (usage > 1) score -= 38;
      else if (usage > 0.8) score -= 24;
      else if (usage > 0.65) score -= 12;
      else score += 4;
    }

    if (topShare > 45) score -= 10;
    if (growthPenalty > 20) score -= 10;
    if (this.goalProfile?.monthlySaving && salary > 0 && this.monthlyBudgetLeft() >= this.goalProfile.monthlySaving) {
      score += 8;
    }

    return Math.max(18, Math.min(98, Math.round(score)));
  }

  scoreLabel(): string {
    const score = this.healthScore();
    if (score >= 80) return 'Strong control';
    if (score >= 65) return 'Mostly healthy';
    if (score >= 50) return 'Needs attention';
    return 'Action needed';
  }

  scoreTone(): string {
    const score = this.healthScore();
    if (score >= 80) return 'good';
    if (score >= 65) return 'info';
    if (score >= 50) return 'warn';
    return 'alert';
  }

  adviceCards(): AdviceCard[] {
    const tips: AdviceCard[] = [];
    const salary = this.monthlySalary();
    const spent = this.totalSpent();
    const previous = this.previousSpent();
    const top = this.topCategories(1)[0];
    const budgetLeft = this.monthlyBudgetLeft();

    if (salary > 0) {
      if (spent > salary) {
        tips.push({
          tone: 'alert',
          title: 'You are spending above your salary',
          text: `Your expenses for this ${this.periodLabel()} are ${this.currency()}${spent.toLocaleString()}, which is above your salary level of ${this.currency()}${salary.toLocaleString()}.`,
          impact: `Overspend: ${this.currency()}${(spent - salary).toLocaleString()}`,
          action: 'Cut non-essential categories first and delay large purchases this period.'
        });
      } else if (budgetLeft > 0) {
        tips.push({
          tone: 'good',
          title: 'You still have room in your budget',
          text: `After current spending, you still have around ${this.currency()}${budgetLeft.toLocaleString()} available from salary.`,
          impact: `${this.budgetUsagePercent()}% of salary used`,
          action: 'Move part of the remaining amount into savings before the next spend.'
        });
      }
    }

    if (top) {
      tips.push({
        tone: top.percent >= 40 ? 'warn' : 'info',
        title: `${top.name} is your biggest spending area`,
        text: `${top.name} takes ${top.percent}% of all expenses in the selected period.`,
        impact: `${this.currency()}${top.total.toLocaleString()} spent`,
        action: top.percent >= 40
          ? `Set a cap for ${top.name} and track each purchase there.`
          : `Keep watching ${top.name} so it does not become your uncontrolled category.`
      });
    }

    const growth = this.changePercent(spent, previous);
    tips.push({
      tone: growth > 15 ? 'warn' : growth < 0 ? 'good' : 'info',
      title: 'Spending trend vs previous period',
      text: growth > 0
        ? `Your expenses are up by ${growth}% compared with the previous ${this.periodLabel()}.`
        : growth < 0
          ? `Your expenses are down by ${Math.abs(growth)}% compared with the previous ${this.periodLabel()}.`
          : 'Your spending stayed almost unchanged versus the previous period.',
      impact: `${this.currency()}${Math.abs(spent - previous).toLocaleString()} difference`,
      action: growth > 15
        ? 'Review recent large transactions and pause impulse spending for a few days.'
        : 'Keep the same rhythm and continue monitoring category spikes.'
    });

    if (this.goalProfile?.monthlySaving) {
      const canCoverGoal = budgetLeft >= this.goalProfile.monthlySaving;
      tips.push({
        tone: canCoverGoal ? 'good' : 'alert',
        title: 'Goal synchronization',
        text: canCoverGoal
          ? `Your current free budget can cover your monthly goal target of ${this.currency()}${this.goalProfile.monthlySaving.toLocaleString()}.`
          : `Your current free budget is below your goal target of ${this.currency()}${this.goalProfile.monthlySaving.toLocaleString()}.`,
        impact: canCoverGoal
          ? `Goal gap covered`
          : `Need ${this.currency()}${Math.max(this.goalProfile.monthlySaving - budgetLeft, 0).toLocaleString()} more`,
        action: canCoverGoal
          ? 'Transfer the monthly target now so the goal stays on track.'
          : 'Reduce the top category or increase monthly savings discipline to close the gap.'
      });
    }

    return tips.slice(0, 4);
  }

  savingsOpportunities(): OpportunityCard[] {
    const reduction = this.activePeriod === 'year' ? 0.08 : this.activePeriod === 'quarter' ? 0.12 : 0.15;
    return this.topCategories(4).map((category) => ({
      category: category.name,
      amount: category.total,
      percent: category.percent,
      saving: Math.round(category.total * reduction)
    }));
  }

  totalPotentialSavings(): number {
    return this.savingsOpportunities().reduce((sum, item) => sum + item.saving, 0);
  }

  periodLabel(): string {
    const labels: Record<string, string> = {
      month: 'month',
      quarter: 'quarter',
      year: 'year'
    };
    return labels[this.activePeriod];
  }

  periodTitle(): string {
    const labels: Record<string, string> = {
      month: 'This month',
      quarter: 'This quarter',
      year: 'This year'
    };
    return labels[this.activePeriod];
  }

  currency(): string {
    return this.settings?.form?.currency || this.goalProfile?.currency || '₸';
  }

  limitsMap(): Record<string, number> {
    return this.settings?.limits || {};
  }

  categoryLimit(category: string): number {
    return Number(this.limitsMap()[category] || 0);
  }

  categoryLimitStatus(category: string): { used: number; limit: number; percent: number } {
    const total = this.topCategories(20).find((item) => item.name === category)?.total || 0;
    const limit = this.categoryLimit(category);
    if (!limit) return { used: total, limit: 0, percent: 0 };
    return {
      used: total,
      limit,
      percent: Math.min(100, Math.round((total / limit) * 100))
    };
  }

  alerts(): Array<{ title: string; text: string; tone: 'good' | 'warn' | 'alert' }> {
    const items: Array<{ title: string; text: string; tone: 'good' | 'warn' | 'alert' }> = [];

    this.topCategories(4).forEach((category) => {
      const limitState = this.categoryLimitStatus(category.name);
      if (limitState.limit && limitState.used > limitState.limit) {
        items.push({
          tone: 'alert',
          title: `${category.name} is above limit`,
          text: `${this.currency()}${limitState.used.toLocaleString()} spent vs ${this.currency()}${limitState.limit.toLocaleString()} limit.`
        });
      }
    });

    if (!items.length) {
      items.push({
        tone: 'good',
        title: 'No critical alerts right now',
        text: 'Your current categories are not breaking any configured limits.'
      });
    }

    return items.slice(0, 3);
  }

  advisorHeadline(): string {
    const score = this.healthScore();
    if (score >= 80) return 'Your finances look stable and controlled.';
    if (score >= 65) return 'You are doing well, but a few categories need attention.';
    if (score >= 50) return 'Your spending is manageable, but you should rebalance soon.';
    return 'Your current pattern needs correction to protect savings and goals.';
  }

  emojiForTone(tone: string): string {
    const map: Record<string, string> = {
      good: '✅',
      info: '💡',
      warn: '⚠️',
      alert: '🚨'
    };
    return map[tone] || '💡';
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
}
