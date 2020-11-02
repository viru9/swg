import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import {TOKEN_NAME, LOGIN_PAGE} from "../../config/config"

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = localStorage.getItem(TOKEN_NAME) ? true : false;
  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{ pathname: LOGIN_PAGE, state: { from: props.location } }} />
          )
      }
    />
  )
}

export default PrivateRoute

