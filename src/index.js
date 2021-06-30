import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';

import store from './redux/store';

const initialState = {
  book1: {
    bookID: 11,
    title: 'Lord of the Rings',
    categories: 'History',
  },
  book2: {
    bookID: 12,
    title: 'The Prince Charming',
    categories: 'Romance',
  },
  book3: {
    bookID: 13,
    title: 'The Chase',
    categories: 'Horror',
  },
};

const result = Math.random(initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
    {result}
  </Provider>,
  document.getElementById('root'),
);
