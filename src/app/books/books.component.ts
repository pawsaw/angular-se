import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { Book } from './book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit, OnDestroy {
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
    this._router.navigate(['books', 'detail', book.isbn]);
  }
}
