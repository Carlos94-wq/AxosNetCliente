import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ IsAuthenticated, component: Component, ...rest }) => {
    return (
        <Route { ...rest } component={
            ( props ) => (
              (IsAuthenticated)
              ? <Component {...props} />
              : <Redirect to='/'/>
            )
        }/>
    )
}
