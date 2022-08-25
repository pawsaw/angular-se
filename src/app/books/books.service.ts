import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, interval, Observable, switchMap, timer } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private _http: HttpClient) {}

  books(): Observable<Book[]> {
    return interval(2000).pipe(
      switchMap((_) => this._http.get<Book[]>('http://localhost:4730/books'))
    );
  }
}
