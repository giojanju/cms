import React from 'react'
import { Route } from 'react-router-dom';
import Layout from '../hoc/Layout/Layout';

const PublicRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        <Layout>
            <Component {...props}/>
        </Layout>
    )}/>
);

export default PublicRoute;