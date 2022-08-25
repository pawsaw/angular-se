import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { Book } from '../book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  book$: Observable<Book | null> = of(null);

  constructor(private _route: ActivatedRoute, private _books: BooksService) {}

  ngOnInit(): void {
    this.book$ = this._route.params.pipe(
      switchMap(({ isbn }) => this._books.book(isbn))
    );
  }
}
