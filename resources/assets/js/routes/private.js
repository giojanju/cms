import React from 'react'
import { Route, Redirect } from 'react-router'
import { connect } from 'react-redux'
import Layout from '../hoc/Layout/Layout'

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        this.props.auth ? (
            <Layout>
                
            </Layout>
        ) : (
            <Redirect to={{
                pathname: '/',
                state: {from: props.location}
            }}/>
        )
    )}/>
);


const mapStateToProps = (state) => {
    return {
        auth : state.isAuthenticated,
    }
};

export default connect(mapStateToProps)(PrivateRoute);