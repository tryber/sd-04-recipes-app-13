import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './styles/reset.css';
import App from './App';
import { RecipeContext } from './context/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <RecipeContext.Consumer>
      <App />
    </RecipeContext.Consumer>
  </BrowserRouter>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
