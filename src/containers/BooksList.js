import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { REMOVE_BOOK } from '../actions/index';

const BooksList = ({ books, REMOVE_BOOK }) => {
  const handleRemoveBook = (book) => {
    REMOVE_BOOK(book);
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

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = (state) => ({ books: state.books });

const mapDispatchToProps = (dispatch) => ({
  REMOVE_BOOK: (book) => { dispatch(REMOVE_BOOK(book)); },
});

BooksList.propTypes = {
  REMOVE_BOOK: PropTypes.func.isRequired,
};

const BookListConnect = connect(mapStateToProps, mapDispatchToProps)(BooksList);

export default BookListConnect;
