import React from 'react';
import { Redirect, Route } from 'react-router';

export const PublicRoute = ({ IsAuthenticated, component: Component, ...rest }) => {
    return (
        <Route { ...rest } component={
            ( props ) => (
              (!IsAuthenticated)
              ? <Component {...props} />
              : <Redirect to='/Dashboard'/>
            )
        }/>
    )
}
