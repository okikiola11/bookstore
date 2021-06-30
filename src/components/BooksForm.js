import React from 'react';

const BOOKSCATEGORY = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = () => (
  <div>
    <form>
      <input type="text" />
      <select name="books" id="books-category">
        <option value="Action">Love Fever</option>
        <option value="History">Lord of the Rings</option>
        <option value="Horror">The Haunt</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  </div>
);

export default BooksForm;
