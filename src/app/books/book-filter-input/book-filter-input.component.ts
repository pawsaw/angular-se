import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-book-filter-input',
  templateUrl: './book-filter-input.component.html',
  styleUrls: ['./book-filter-input.component.scss'],
})
export class BookFilterInputComponent implements OnInit {
  @Output() titleChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  titleInput({ target }: Event): void {
    this.titleChange.emit((target as HTMLInputElement).value);
  }
}
