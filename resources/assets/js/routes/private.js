import React from 'react'
import { Route, Redirect } from 'react-router'
import { connect } from 'react-redux'
import Layout from '../hoc/Layout/Layout'

const PrivateRoute = ({component: Component, isAuthenticated, layout, title, ...rest}) => (
    <Route {...rest} render={props => (
        isAuthenticated ? (
            layout ? (
                <Layout title={title}>
                    <Component {...props}/>
                </Layout>
            ) : (
                <Component {...props}/>
            )
        ) : (
            <Redirect to={{
                pathname: '/login',
                state: {from: props.location}
            }}/>
        )
    )}/>
);

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated,
    }
};

export default connect(mapStateToProps)(PrivateRoute);