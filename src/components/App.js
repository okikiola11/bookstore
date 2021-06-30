import React from 'react';
import BooksList from './BooksList';
import BooksForm from './BooksForm';
import '../App.css';

const App = () => (
  <div className="App">
    <React.Fragment className="App-header">
      <BooksList />
      <BooksForm />
    </React.Fragment>
  </div>
);

export default App;
