import React from "react";
import { Route, Switch } from "react-router-dom";
import Counter from "./Counter";
import MessagesList from "./MessagesList";
import Menu from "./Menu";

const routes = (
  <React.Fragment>
    <Menu />
    <Switch>
      <Route exact path="/" component={Counter} />
      <Route path="/messages" component={MessagesList} />
    </Switch>
  </React.Fragment>
);

export default routes;
