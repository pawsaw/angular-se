import { createReducer, on } from '@ngrx/store';
import {
  createBookStart,
  CreateBookStartAction,
} from './book-collection.actions';
import { BookCollectionSlice } from './book-collection.slice';

export const initialState: BookCollectionSlice = {
  books: [],
};

export const bookCollectionReducer = createReducer(
  initialState,
  on(createBookStart, (state, action) => {
    return {
      ...state,
      books: [...state.books, action.book],
    };
  })
);
