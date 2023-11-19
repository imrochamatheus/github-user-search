import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DEFAULT_GITHUB_USER_DATA } from '../shared/constants';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { GithubUser } from '../shared/services/search-github-user.interfaces';
import { ProfileCardComponent } from '../profile-card/profile-card.component';
import { ThemeSwitchComponent } from '../theme-switch/theme-switch.component';
import { SearchGithubUserService } from '../shared/services/search-github-user.service';

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
  providers: [SearchGithubUserService],
})
export class HomeComponent implements OnInit {
  public userData: GithubUser = DEFAULT_GITHUB_USER_DATA;

  constructor(private readonly userSearchService: SearchGithubUserService) {}

  public searchUser(username: string) {
    this.userSearchService.searchUser(username).subscribe({
      next: (data) => {
        this.userData = data;
      },
    });
  }

  public ngOnInit(): void {}
}
