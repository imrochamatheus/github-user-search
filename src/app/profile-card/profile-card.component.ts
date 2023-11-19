import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubUser } from '../shared/search-github-user.interfaces';
import { DEFAULT_GITHUB_USER_DATA } from '../shared/constants';

@Component({
  selector: 'profile-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.less',
})
export class ProfileCardComponent implements OnInit {
  @Input() public data!: GithubUser;

  constructor() {}

  public ngOnInit(): void {}
}
