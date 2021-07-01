const CREATE_BOOK = (book) => ({
  type: 'books/createBooks',
  text: book,
});

const REMOVE_BOOK = (book) => ({
  type: 'books/removeBooks',
  text: book,
});

export { CREATE_BOOK, REMOVE_BOOK };