import DefaultLayout from '~/layouts/DefaultLayout';
// import { LOCAL_STORAGE } from '~/config/index';
import React from 'react';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const PrivateRoute = (props) => {
    const LOCAL_STORAGE = {}
    const accessToken = localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN);
    return (
        <>
            {accessToken ? (
                <DefaultLayout>
                    <Route {...props} />
                </DefaultLayout>
            ) : (
                <Route
                    render={(props) => (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { from: props.location },
                            }}
                        />
                    )}
                />
            )}
        </>
    );
};

export default PrivateRoute;
