const CREATE_BOOK = (book) => ({
  type: 'books/createBooks',
  text: book,
});

const REMOVE_BOOK = (book) => ({
  type: 'books/removeBooks',
  text: book.id,
});

const CHANGE_FILTER = (category) => ({
  type: 'books/change_filter',
  payload: category,
});

export { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER };
