export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const CHANGE_FILTER = 'CHANGE_FILTER';

const createBook = (book) => ({
  type: 'CREATE_BOOK',
  text: book,
});

const removeBook = (book) => ({
  type: 'REMOVE_BOOK',
  text: book.id,
});

const changeFilter = (category) => ({
  type: 'CHANGE_FILTER',
  payload: category,
});

export { createBook, removeBook, changeFilter };
