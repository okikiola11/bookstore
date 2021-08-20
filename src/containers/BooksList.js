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
      <div className="select-category">
        <CategoryFilter handleFilterChange={handleFilterChange} />
      </div>
      <div>
        <div className="all-books">
          {filteredBooks.map((book) => (
            <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />
          ))}
        </div>
      </div>
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
