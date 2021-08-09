import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { REMOVE_BOOK, CHANGE_FILTER } from '../actions/index';

const BooksList = ({ books, filter, REMOVE_BOOK, CHANGE_FILTER }) => {
  const handleRemoveBook = (book) => {
    REMOVE_BOOK(book);
  };
  let filteredBooks = books;
  if (filter === 'All') {
    filteredBooks = books;
  } else {
    filteredBooks = books.filter(book => book.category === filter)
  }

  const handleFilterChange = e => {
    CHANGE_FILTER(e.target.value);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => ({ 
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  REMOVE_BOOK: (book) => { dispatch(REMOVE_BOOK(book)); },
});

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  REMOVE_BOOK: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  CHANGE_FILTER: PropTypes.func.isRequired,
};

const BookListConnect = connect(mapStateToProps, mapDispatchToProps)(BooksList);

export default BookListConnect;
