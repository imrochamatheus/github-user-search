import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoDataTextDirective } from '../../shared/directives/no-data-text.directive';

@Component({
  selector: 'profile-more-info',
  standalone: true,
  imports: [CommonModule, NoDataTextDirective],
  templateUrl: './profile-more-info.component.html',
  styleUrl: './profile-more-info.component.less',
})
export class ProfileMoreInfoComponent implements OnInit {
  @Input() public imagePath!: string;
  @Input() public textContent?: string;

  public get defaultTextContent(): string {
    return 'Not available';
  }

  public get defaultOpacity(): string {
    return '0.5';
  }

  constructor() {}

  public ngOnInit(): void {}
}
