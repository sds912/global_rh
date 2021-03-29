import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { SIGN_IN, WELCOME } from '../../constants/routes';

const GuardedRoute = ({ component: Component, auth, ...rest }) => (
    <Route {...rest} render={(props) => (
        auth !== null
            ? <Component {...props} />
            : <Redirect to={WELCOME} />
    )} />
)


function PrivateRoute ({component: Component, auth, ...rest}) {
    return (
      <Route
        {...rest}
        render={(props) => true 
          ? <Component {...props} />
          : <Redirect to={{pathname: '/signin', state: {from: props.location}}} />}
      />
    )
  }

export default PrivateRoute;