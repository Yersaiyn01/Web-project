import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private current = 'light';
  private themes = ['theme-light', 'theme-dark', 'theme-green'];

  constructor() {
    const saved = localStorage.getItem('theme');
    if (saved) {
      this.setTheme(saved);
    } else {
      this.setTheme('light');
    }
  }

  setTheme(theme: string) {
    this.current = theme;
    localStorage.setItem('theme', theme);
    this.themes.forEach(t => document.body.classList.remove(t));
    document.body.classList.add(`theme-${theme}`);
  }

  getTheme() {
    return this.current;
  }
}