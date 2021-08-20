import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => {
  const { id, title, category } = book;

  return (
    <div className="lesson-panel">
      <div className="book-container">
        <div className="book-cat">{category}</div>
        <div className="book-title">{title}</div>
        <div className="author-name">Author Name</div>
        <div className="options">
          <ul>
            <li className="book-comment">Comments</li>
            <li className="book-remove">
              <button type="button" onClick={() => handleRemoveBook(book)}>Delete</button>
            </li>
            <li className="book-edit">Edit</li>
          </ul>
        </div>
      </div>
      <div className="progress-bar">
        <div className="circle" />
        <div classsName="percent-info">
          <span className="percentage">75%</span>
          <br />
          <span className="completed">Completed</span>
        </div>
      </div>
      <div className="udpate-progress">
        <div className="current-chapter">Current chapter</div>
        <div className="chapter-number">
          Chapter
          {id}
        </div>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
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
