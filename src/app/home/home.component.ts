import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileCardComponent } from '../profile-card/profile-card.component';
import { ThemeToggleService } from '../theme-switch/theme-toggle.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProfileCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
  providers: [ThemeToggleService],
})
export class HomeComponent {
  constructor(private readonly themeToggleService: ThemeToggleService) {
    themeToggleService.toggleTheme();
  }
}
