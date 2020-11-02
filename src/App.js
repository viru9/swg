import './App.css';
import React from 'react';
import PrivateRoute from './component/Routes/PrivateRoute';
import PublicRoute from './component/Routes/PublicRoute';

import Login from "./component/Login/Login";
import Dashboard from "./component/Dashboard/Dashboard";
import Dashboard2 from "./component/Dashboard/Dashboard2";

import { Router as Router, Route, Switch } from 'react-router-dom';
import history from './history';
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard}/>
          <PrivateRoute path="/dashboard2" component={Dashboard2}/>
          <PublicRoute path="/" component={Login}/>
        </Switch>
      </Router >
    </Provider>
  );
}

export default App;
