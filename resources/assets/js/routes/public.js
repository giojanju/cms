import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import Layout from '../hoc/Layout/Layout';
import { connect } from 'react-redux';

const PublicRoute = ({component: Component, isAuthenticated, layout, ...rest}) => (
	<Route {...rest} render={props => (
		layout ? (
			<Layout>
				<Component {...props}/>
			</Layout>
		) : (
			<Component {...props}/>
		)
	)}/>
);

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated,
    }
};

export default connect(mapStateToProps)(PublicRoute);