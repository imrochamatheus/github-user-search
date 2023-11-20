import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubUser } from '../shared/services/search-github-user.interfaces';
import { NoDataTextDirective } from '../shared/directives/no-data-text.directive';
import { ProfileMoreInfoComponent } from './profile-more-info/profile-more-info.component';

@Component({
  selector: 'profile-card',
  standalone: true,
  imports: [CommonModule, NoDataTextDirective, ProfileMoreInfoComponent],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.less',
})
export class ProfileCardComponent implements OnInit {
  @Input() public data!: GithubUser;

  public defaultProfileImage: string = 'assets/img/Bitmap.svg';

  constructor() {}

  public ngOnInit(): void {}
}
