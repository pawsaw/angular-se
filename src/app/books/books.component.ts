import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of, Subscription } from 'rxjs';
import { Book } from './book';
import { BooksService } from './books.service';
import { createBookStart } from './store/book-collection.actions';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit, OnDestroy {
  books$: Observable<Book[] | null> = of(null);

  constructor(
    private _books: BooksService,
    private _router: Router,
    private _store: Store
  ) {}

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

  addDummyBook(): void {
    const id = new Date().getTime().toString();
    this._store.dispatch(
      createBookStart({
        book: {
          id,
          title: `My dummy book ${id}`,
          subtitle:
            'Develop Fast, Reliable, and Engaging User Experiences for the Web',
          isbn: id,
          abstract:
            'Are you a developer that wants to create truly cross-platform user experiences with a minimal footprint, free of store restrictions and features customers want? Then you need to get to grips with Progressive Web Applications (PWAs), a perfect amalgamation of web and mobile applications with a blazin...',
          author: 'Chris Love',
          publisher: 'Packt Publishing',
          price: '$31.02',
          numPages: 354,
          cover: 'http://localhost:4730/covers/9781787125421.png',
          userId: 1,
        },
      })
    );
  }
}
