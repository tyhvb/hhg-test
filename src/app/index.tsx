/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from '../styles/global-styles';

import { CounterPage } from './pages/CounterPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { EmployeesPage } from './pages/EmployeesPage';
import 'bootstrap/dist/css/bootstrap.css';

export function App() {
  return (
    <BrowserRouter>
      <Helmet titleTemplate="%s - HHG Test" defaultTitle="HHG Test" />

      <Switch>
        <Route
          exact
          path={process.env.PUBLIC_URL + '/counter'}
          component={CounterPage}
        />
        <Route
          exact
          path={process.env.PUBLIC_URL + '/employees'}
          component={EmployeesPage}
        />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
