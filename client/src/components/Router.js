import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import NotFound from "./NotFound";
import IconBar from './IconBar';
import FindButton from "./FindButton";
import CreateSpaceForm from './CreateSpaceForm';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/icons" component={IconBar} />
      <Route path="/btn" component={FindButton}/>
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;