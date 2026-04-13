import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GoalService {
  getProfile() {
    const s = localStorage.getItem('userProfile');
    return s ? JSON.parse(s) : null;
  }

  getSavedAmount() {
    return +(localStorage.getItem('savedAmount') || 0);
  }

  saveProfile(profile: any) {
    localStorage.setItem('userProfile', JSON.stringify(profile));
  }

  addSaving(amount: number) {
    const current = this.getSavedAmount();
    localStorage.setItem('savedAmount', String(current + amount));
  }

  reset() {
    localStorage.removeItem('userProfile');
    localStorage.removeItem('savedAmount');
  }
}