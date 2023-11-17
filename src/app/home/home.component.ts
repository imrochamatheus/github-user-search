import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileCardComponent } from '../profile-card/profile-card.component';
import { ThemeToggleService } from '../theme-switch/theme-toggle.service';
import { ThemeSwitchComponent } from '../theme-switch/theme-switch.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'toh-home',
  standalone: true,
  imports: [
    CommonModule,
    SearchBarComponent,
    ProfileCardComponent,
    ThemeSwitchComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
  providers: [],
})
export class HomeComponent {
  constructor() {}
}
