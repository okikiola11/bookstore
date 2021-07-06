import React from 'react';

const BOOKSCATEGORY = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = () => (
  <form>
    <div>
      <input type="text" />
    </div>
    <div>
      <select>
        {BOOKSCATEGORY.map((option) => (
          <option key={option.id} value={option}>{option}</option>
        ))}
      </select>
    </div>
    <button type="submit">Submit</button>
  </form>
);

export default BooksForm;
