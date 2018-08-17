import React from 'react'
import { Route, Redirect } from 'react-router'
import { connect } from 'react-redux'
import Layout from '../hoc/Layout/Layout'

const PrivateRoute = ({component: Component, isAuthenticated, ...rest}) => (
    <Route {...rest} render={props => (
        isAuthenticated ? (
            <Component p={isAuthenticated} {...props}/>
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