import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Book } from '../book';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input() book: Book | null = null;
  @Output() bookSelected = new EventEmitter<Book>();

  initialStyle = {
    color: 'red',
  };

  constructor() {}

  ngOnInit(): void {}

  detailsClicked(event: MouseEvent): void {
    event.preventDefault();
    this.bookSelected.emit(this.book!);
  }
}
