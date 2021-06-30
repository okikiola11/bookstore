import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

const initialState = {
  bookId: 11,
  title: 'Lord of the Rings',
  categories: 'History',
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
