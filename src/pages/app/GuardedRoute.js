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

export default GuardedRoute;