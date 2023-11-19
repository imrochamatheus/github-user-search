import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoDataTextDirective } from '../../shared/directives/no-data-text.directive';

@Component({
  imports: [CommonModule, NoDataTextDirective],
  standalone: true,
  selector: 'profile-more-info',
  styleUrl: './profile-more-info.component.less',
  templateUrl: './profile-more-info.component.html',
})
export class ProfileMoreInfoComponent implements OnInit {
  @Input() public isLink?: boolean;
  @Input() public imagePath!: string;
  @Input() public textContent?: string;

  public defaultTextContent: string = 'Not available';
  public defaultOpacity: string = '0.5';

  constructor() {}

  public ngOnInit(): void {}
}
