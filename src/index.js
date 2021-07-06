import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import rootReducer from './redux/reducers/index';

const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * 10),
      title: 'Lord of the Rings',
      category: 'History',
    },
    {
      id: Math.floor(Math.random() * 10),
      title: 'The Prince Charming',
      category: 'Romance',
    },
    {
      id: Math.floor(Math.random() * 10),
      title: 'The Chase',
      category: 'Horror',
    }],
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
