import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.less',
})
export class SearchBarComponent {
  @Output() public searchedUsername: EventEmitter<string> =
    new EventEmitter<string>();

  public username: string = '';

  constructor() {}

  public searchUser(): void {
    this.searchedUsername.emit(this.username);
  }

  public ngOnInit(): void {}
}
