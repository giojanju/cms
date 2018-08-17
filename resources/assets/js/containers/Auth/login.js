import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import * as actions from '../../store/actions/auth';
import * as actionTypes from '../../store/action-types';
import axios from '../../axios';
import './Auth.css';
import * as helpers from '../../helpers/generalHelper';

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
		};
	}

	handleFiledChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	render() {
		return (
			<section className="auth-body">
				<div className="auth-box">
					<div className="d-flex h-100">
						<div className="left">
							<Img 
								src={helpers.asset('logo.png')} 
								mx={150} 
								center={true} 
							/>
							<div className="login-form">
								<form>
									<Input
										Type="text"
										val=""
										plc="Your email"
									/>
									<Input
										Type="password"
										val=""
										plc="Your password"
									/>
									<Checkbox 
										label="remember me"
									/>
									<Button
										Type="primary block lg upper"
										val="Login"
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