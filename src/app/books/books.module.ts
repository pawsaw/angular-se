import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookFilterInputComponent } from './book-filter-input/book-filter-input.component';
import { BookFilterPipe } from './book-filter/book-filter.pipe';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { BooksRoutingModule } from './books-routing.module';

@NgModule({
  declarations: [
    BooksComponent,
    BookCardComponent,
    BookFilterPipe,
    BookFilterInputComponent,
    BookDetailComponent,
    BookCollectionComponent,
  ],
  imports: [CommonModule, BooksRoutingModule],
  exports: [BooksComponent],
})
export class BooksModule {}
