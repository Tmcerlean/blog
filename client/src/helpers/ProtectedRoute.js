import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

const ProtectedRoute = ({ user, children, ...rest }) => {

    return (
        <Route
            {...rest}
            render={({ location }) => {
                if (user && user.user !== null) {
                    // Using cloneElement to add / modify the props of its children.
                    return React.cloneElement(children, { user });
                }
                
                if (!user || user.user === null) {
                    return (
                        <Redirect
                            to={{
                                pathname: ROUTES.LOGIN,
                                state: { from: location }
                            }}
                        />
                    );
                }

                return null;
            }}
        />
    )
}

export default ProtectedRoute;