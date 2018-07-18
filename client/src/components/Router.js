import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import NotFound from './NotFound';
import CreateSpaceForm from './CreateSpaceForm';
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/addSpace" component={CreateSpaceForm} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;