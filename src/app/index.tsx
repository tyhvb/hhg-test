/**
 *
 * App
 *
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from '../styles/global-styles';

import { CounterPage } from './pages/CounterPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { EmployeesPage } from './pages/EmployeesPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';

export function App() {
  return (
    <BrowserRouter>
      <Helmet titleTemplate="%s - HHG Test" defaultTitle="HHG Test" />

      <Switch>
        <Route path="/counter" component={CounterPage} />
        <Route exact path="/employees" component={EmployeesPage} />
        <Route path="/" component={CounterPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </BrowserRouter>
  );
}
