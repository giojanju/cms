import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import * as actions from '../../store/actions/auth';
import * as actionTypes from '../../store/action-types';
import axios from '../../axios';
import './Auth.css';

import Img from '../../components/UI/Img/Img';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Checkbox from '../../components/UI/Checkbox/Checkbox';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			errors: [],
		};

		this.handleFiledChange = this.handleFiledChange.bind(this);
	}

	componentDidMount() {
		this.props.checkAuth();
	}

	handleFiledChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	render() {
		const { from } = this.props.location.state || { from: { pathname: '/' } };
		const { isAuthenticated } = this.props;

		if (isAuthenticated) {
		    return (
		        <Redirect to={from.pathname}/>
		    )
		}

		return (
			<section className="auth-body">
				<div className="auth-box">
					<div className="d-flex h-100">
						<div className="left">
							<Img 
								img={'logo.png'} 
								mx={150} 
								center={true} 
							/>
							<div className="login-form">
								<form>
									<Input
										Type="text"
										val={this.state.email}
										plc="Email"
										name="email"
										change={this.handleFiledChange}
										errors={this.props.errors}
									/>
									<Input
										Type="password"
										val={this.state.password}
										plc="Password"
										name="password"
										change={this.handleFiledChange}
										errors={this.props.errors}
									/>
									<Checkbox 
										label="remember me"
									/>
									<Button
										Type="primary block lg upper"
										val="Login"
										click={() => this.props.auth(this.state.email, this.state.password)}
									/>
								</form>
							</div>
						</div>
						<div className="right right d-flex align-items-center justify-content-center">
							<h3 className="text-light">CMS Greeting text</h3>
						</div>
					</div>
				</div>
			</section>
		);
	}
};

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.isAuthenticated,
		errors: state.error,
	};
};


const mapDispatchToProps = dispatch => {
	return {
		auth: (email, password) => dispatch(actions.auth(email, password)),
		checkAuth: () => dispatch(actions.authCheck()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);