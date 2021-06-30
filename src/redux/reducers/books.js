const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return action.text;
    case REMOVE_BOOK:
      return action.text;
    default:
      return state;
  }
};

export default booksReducer;
