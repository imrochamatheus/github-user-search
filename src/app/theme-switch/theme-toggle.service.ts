import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { Theme } from './interfaces';

@Injectable()
export class ThemeToggleService {
  private currentTheme: Theme = Theme.LIGHT;

  private readonly themeChangedSubject: BehaviorSubject<Theme> =
    new BehaviorSubject<Theme>(this.currentTheme);

  public themeChanged$?: Observable<Theme>;

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
    this.init();
  }

  private updateCurrentTheme(theme: Theme): void {
    this.currentTheme = theme;
    this.themeChangedSubject.next(theme);

    this.document.body.classList.add(theme);
  }

  private init(): void {
    const devicePreference = window.matchMedia('(prefers-color-scheme: dark)');

    devicePreference.matches
      ? this.updateCurrentTheme(Theme.DARK)
      : this.updateCurrentTheme(Theme.LIGHT);
  }

  public toggleTheme(): void {
    this.document.body.classList.toggle(Theme.DARK);
    this.document.body.classList.toggle(Theme.LIGHT);

    this.currentTheme === Theme.LIGHT
      ? this.updateCurrentTheme(Theme.DARK)
      : this.updateCurrentTheme(Theme.LIGHT);
  }
}
