import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import rootReducer from './redux/reducers/index';

const initialState = {
  book: [{
    bookID: 11,
    title: 'Lord of the Rings',
    categories: 'History',
  },
  {
    bookID: 12,
    title: 'The Prince Charming',
    categories: 'Romance',
  },
  {
    bookID: 13,
    title: 'The Chase',
    categories: 'Horror',
  }],
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
