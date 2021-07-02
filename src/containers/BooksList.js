import React from 'react';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = ({ books }) => (
  <table>
    <thead>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {books.map((book, i) => (
        <td key={`book-${(i + 1)}`}>
          <Book key={book.id} book={book} />
        </td>
      ))}
    </tbody>
  </table>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BooksList;
