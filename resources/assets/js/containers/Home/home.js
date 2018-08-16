import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import * as actionTypes from '../../store/action-types';

class Home extends Component {
	handleClick() {
		console.log('click');
	}

	render() {
		return (
			<div>
				home page {this.props.auth}
				<button onClick={this.props.auth}>Auth</button>
			</div>
		);
	};
}

const mapStateToProps = (state) => {
	return {
		auth: state.isAuthenticated,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		auth: () => dispatch({type: actionTypes.AUTH_LOGIN})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);