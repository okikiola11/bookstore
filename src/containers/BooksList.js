import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({
  books, filter, removeBook, changeFilter,
}) => {
  const handleRemoveBook = (book) => {
    removeBook(book);
  };
  let filteredBooks = books;
  if (filter === 'All') {
    filteredBooks = books;
  } else {
    filteredBooks = books.filter((book) => book.category === filter);
  }

  const handleFilterChange = (e) => {
    changeFilter(e.target.value);
  };

  return (
    <div>
      <CategoryFilter handleFilterChange={handleFilterChange} />
      <table>
        <tbody>
          {filteredBooks.map((book) => (
            <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => { dispatch(removeBook(book)); },
  changeFilter: (book) => {
    dispatch(changeFilter(book));
  },
});

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const BookListConnect = connect(mapStateToProps, mapDispatchToProps)(BooksList);

export default BookListConnect;
