import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  private darkThemeClass = 'my-app-dark';
  private themeKey = 'app-theme';

  constructor() {
    this.loadTheme();
  }

  toggleDarkMode(): boolean {
    const element = document.querySelector('html');
    if (element) {
      element.classList.toggle(this.darkThemeClass);
      const isDarkMode = element.classList.contains(this.darkThemeClass);
      localStorage.setItem(this.themeKey, isDarkMode ? 'dark' : 'light');
      return isDarkMode;
    }
    return false;
  }

  private loadTheme() {
    const savedTheme = localStorage.getItem(this.themeKey);
    if (savedTheme === 'dark') {
      const element = document.querySelector('html');
      if (element) {
        element.classList.add(this.darkThemeClass);
      }
    }
  }
}