import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => {
  const { id, title, category } = book;

  return (
    <div className="lesson-panel">
      <div>
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
        <div className="display book-progress">
          <div className="circle" />
          <div classsName="percent-info">
            <span className="percentage">75%</span>
            <br />
            <span className="completed">Completed</span>
          </div>
        </div>
        <div className="udpate-progress">
          <p className="current-chapter">current chapter</p>
          <p className="chapter-number">
            Chapter
            {id}
          </p>
          <button type="button">UPDATE PROGRESS</button>
        </div>
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
