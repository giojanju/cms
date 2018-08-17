import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import * as actions from '../../store/actions/auth';
import * as actionTypes from '../../store/action-types';
import axios from '../../axios';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
		};
		if (this.props.auth) {
            <Redirect to={{
                pathname: '/dfwadwad',
            }}/>
		}

		this.handleGetUser = this.handleGetUser.bind(this);
	}

	handleClick() {
		console.log('click');
	}

	handleFiledChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleGetUser() {
		console.log('this')
		axios.get('user').then(re => {
			console.log(re.data)
		})
		.catch(er => {
			console.log(er.response.data)
		})
	}

	render() {
		return (
			<div>
				<h1>Home page</h1>
			</div>
		);
	};
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Home);