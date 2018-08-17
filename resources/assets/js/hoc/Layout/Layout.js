import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';

class Layout extends Component {

	componentDidMount() {
		this.props.checkAuth();
	}

	constructor(props) {
		super(props);

		this.logout = this.logout.bind(this);
	}

	logout() {
		console.log('logout')
		this.props.logout()
	}

	render () {
		return (
			<div>
				<div>
					<ul>
						<li><NavLink to="/cp">Dashboard</NavLink></li>
						<li><NavLink exact to="/">Home</NavLink></li>
						<li><NavLink to="/login">Login</NavLink></li>
						<li><a onClick={this.logout}>Logout</a></li>
					</ul>
				</div>			
				<div>Text</div>			
				{this.props.children}
				<div>Footer</div>			
			</div>
		);
	}
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated : state.isAuthenticated,
    }
};

const mapDispatchToProps = dispatch => {
	return {
		checkAuth: () => dispatch(actions.authCheck()),
		logout: () => dispatch(actions.authLogout()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);