import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeToggleService } from './theme-toggle.service';
import { Theme } from './interfaces';

@Component({
  selector: 'theme-switch',
  standalone: true,
  imports: [CommonModule],
  providers: [ThemeToggleService],
  templateUrl: './theme-switch.component.html',
  styleUrl: './theme-switch.component.less',
})
export class ThemeSwitchComponent implements OnInit {
  public currentTheme: Theme = Theme.LIGHT;
  public baseIconPath: string = 'assets/icons/';

  public get iconPath(): string {
    const iconsMap: Map<Theme, string> = new Map([
      [Theme.LIGHT, 'icon-moon'],
      [Theme.DARK, 'icon-sun'],
    ]);

    return `${this.baseIconPath}${iconsMap.get(this.currentTheme)}.svg`;
  }

  public get themeToggleLabel(): Theme {
    return this.currentTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
  }

  constructor(private readonly themeToggleService: ThemeToggleService) {}

  private listenForThemeChange(): void {
    this.themeToggleService.themeChanged$.subscribe({
      next: (theme) => {
        this.currentTheme = theme;
      },
    });
  }

  public toggleTheme(): void {
    this.themeToggleService.toggleTheme();
  }

  public ngOnInit(): void {
    this.listenForThemeChange();
  }
}
