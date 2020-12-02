import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { SIGN_IN } from '../../constants/routes';

const GuardedRoute = ({ component: Component, auth, ...rest }) => (
    <Route {...rest} render={(props) => (
        auth !== null
            ? <Component {...props} />
            : <Redirect to={SIGN_IN} />
    )} />
)

export default GuardedRoute;