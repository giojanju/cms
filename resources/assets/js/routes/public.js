import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import Layout from '../hoc/Layout/Layout';
import { connect } from 'react-redux';

const PublicRoute = ({component: Component, isAuthenticated, ...rest}) => (
    <Route {...rest} render={props => (
	    !isAuthenticated ? (
	        <Layout>
	            <Component {...props}/>
	        </Layout>
	    ) : (
	    	<Redirect to={{
	    		pathname: '/cp',
	    	}}/>
	    )
    )}/>
);

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated,
    }
};

export default connect(mapStateToProps)(PublicRoute);