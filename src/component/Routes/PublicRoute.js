import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import {TOKEN_NAME, LANDING_PAGE} from "../../config/config"

const PublicRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = localStorage.getItem(TOKEN_NAME) ? true : false;
  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
            <Redirect to={{ pathname: LANDING_PAGE, state: { from: props.location } }} />
        ) : (
            <Component {...props}/>
          )
      }
    />
  )
}

export default PublicRoute

