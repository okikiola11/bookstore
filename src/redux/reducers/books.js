import { CREATE_BOOK, REMOVE_BOOK } from '../../actions/index';

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.text];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.text)];
    default:
      return state;
  }
};

export default booksReducer;
