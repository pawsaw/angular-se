export type ISBN = string;

export interface Book {
  isbn: ISBN;
  title: string;
}

export interface AddBookAction {
  type: 'AddBookAction';
  book: Book;
}

export interface DeleteBookAction {
  type: 'DeleteBookAction';
  isbn: ISBN;
}

export interface RenameBookAction {
  type: 'RenameBookAction';
  isbn: ISBN;
  title: string;
}

export interface BurnBookAction {
  type: 'RenameBookAction';
}

export interface State {
  bookIds: ISBN[];
  bookById: Record<ISBN, Book>;
}

export const initialState: State = {
  bookIds: [],
  bookById: {},
};

export type AllBookActions =
  | AddBookAction
  | DeleteBookAction
  | RenameBookAction;

export function booksReducer(
  state: State = initialState,
  action: AllBookActions
): State {
  switch (action.type) {
    case 'RenameBookAction':
      const book = state.bookById[action.isbn]; // O(1)
      if (!book) {
        return state;
      }

      const newState = {
        ...state,
        bookById: {
          ...state.bookById,
        },
      };

      newState.bookById[action.isbn] = {
        ...book,
        title: action.title,
      };

      return newState;
  }

  return state;
}
