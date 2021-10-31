import React from 'react';
import { Redirect, Route } from 'react-router';
import useFirebase from '../../hooks/useFirebase';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useFirebase();

    if (isLoading) {
        return <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }


    return (
        <Route
            {...rest}
            render={({ location }) =>
                (user?.displayName || user?.email) ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    ></Redirect>
                )
            }
        ></Route>
    );
};

export default PrivateRoute;