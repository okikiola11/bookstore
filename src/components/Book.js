import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => {
  const { id, title, category } = book;

  return (
    <tr className="Lesson-Panel">
      <div className="display">
        <div className="book-info">
          <td className="book-id">{id}</td>
          <td className="book-title">{title}</td>
          <td className="book-cat">{category}</td>
          <div className="options">
            <td className="Remove comment">Comments</td>
            <td>
              <button type="button" onClick={() => handleRemoveBook(book)}>Delete</button>
            </td>
          </div>
        </div>
        <div className="book-progress">
          <div className="circle" />
        </div>
      </div>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.exact({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
