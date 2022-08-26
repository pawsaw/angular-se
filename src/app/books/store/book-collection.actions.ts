import { createAction, props } from '@ngrx/store';
import { Book } from '../book';

export interface CreateBookStartPayload {
  book: Book;
}

export const createBookStart = createAction(
  '[Book] create book start',
  props<CreateBookStartPayload>()
);
