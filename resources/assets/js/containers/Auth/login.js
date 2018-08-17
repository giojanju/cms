import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import * as actions from '../../store/actions/auth';
import * as actionTypes from '../../store/action-types';
import axios from '../../axios';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
		};
	}

	handleFiledChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	render() {
		return (
			<div>
				<h1>Auth</h1>
				<form>
					<input type="text" onChange={(e) => this.handleFiledChange(e)} value={this.state.email} name="email" />
					<input type="password" onChange={(e) => this.handleFiledChange(e)} value={this.state.password} name="password" />
					<button type="button" onClick={() => this.props.auth(this.state.email, this.state.password)}>Auth</button>
				</form>
			</div>
		);
	}
};

const mapStateToProps = (state) => {
	return {
		auth: state.isAuthenticated,
		error: state.error,
	};
};


const mapDispatchToProps = dispatch => {
	return {
		auth: (email, password) => dispatch(actions.auth(email, password))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);