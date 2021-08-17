import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import NavBar from './Nav';
import '../App.css';

const App = () => (
  <div className="App">
    <>
      <NavBar />
      <BooksList />
      <BooksForm />
    </>
  </div>
);

export default App;
