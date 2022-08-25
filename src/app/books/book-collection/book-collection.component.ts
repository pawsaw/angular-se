import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Book } from '../book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.scss'],
})
export class BookCollectionComponent implements OnInit {
  books$: Observable<Book[] | null> = of(null);

  constructor(private _books: BooksService, private _router: Router) {}

  ngOnInit(): void {
    this.books$ = this._books.books();
  }

  ngOnDestroy(): void {}

  titleFilter = '';

  titleChange(titleFilter: string): void {
    this.titleFilter = titleFilter;
  }

  navigateWithBook(book: Book): void {
    this._router.navigate([book.isbn]);
  }
}
