import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from "./Components/App";
import { createStore } from 'redux';
import reducer from "./Reducers";
import  './index.css';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
  <App/>
  </Provider>, document.getElementById('root')
)