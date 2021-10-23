import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Donations from './pages/donations';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter, // as rotas da aplicação
  Switch, // indica quais as entradas possiveis
  Route
} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path='/donations' component={Donations} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
