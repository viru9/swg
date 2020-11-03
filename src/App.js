import './App.css';
import React from 'react';
import PrivateRoute from './component/Routes/PrivateRoute';
import PublicRoute from './component/Routes/PublicRoute';

import Login from "./component/Login/Login";
import Dashboard from "./component/Dashboard/Dashboard";
import Organizations from "./views/Organizations/Organizations";
import Tickets from './views/Tickets/Tickets';
import Users from "./views/Users/Users";

import { Router as Router, Route, Switch } from 'react-router-dom';
import history from './helpers/history';
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard}/>
          <PrivateRoute path="/users" component={Users}/>
          <PrivateRoute path="/organizations" component={Organizations}/>
          <PrivateRoute path="/tickets" component={Tickets}/>
          <PublicRoute path="/" component={Login}/>
        </Switch>
      </Router >
    </Provider>
  );
}

export default App;
