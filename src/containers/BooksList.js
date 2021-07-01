import React from 'react';
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
        <td key={`item-${(i + 1)}`}>
          <Book key={books.id} book={book} />
        </td>
      ))}
    </tbody>
  </table>
);

export default BooksList;
