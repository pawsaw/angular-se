import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookFilterInputComponent } from './book-filter-input/book-filter-input.component';
import { BookFilterPipe } from './book-filter/book-filter.pipe';
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  declarations: [
    BooksComponent,
    BookCardComponent,
    BookFilterPipe,
    BookFilterInputComponent,
    BookDetailComponent,
  ],
  imports: [CommonModule],
  exports: [BooksComponent],
})
export class BooksModule {}
