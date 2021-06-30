import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

const ProtectedRoute = ({ userAuth, children, ...rest }) => {

    return (
        <Route
            {...rest}
            render={({ location }) => {
                if (userAuth && userAuth !== null) {
                    console.log(userAuth)
                    console.log("FIRST")
                    // Using cloneElement to add / modify the props of its children.
                    return React.cloneElement(children, { userAuth });
                }
                
                if (!userAuth || userAuth === null) {
                    console.log(userAuth)
                    console.log("SECOND")
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