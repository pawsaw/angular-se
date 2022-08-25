import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  {
    path: 'books/detail/:isbn',
    component: BookDetailComponent,
  },
  {
    path: 'books',
    component: BooksComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/books',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
