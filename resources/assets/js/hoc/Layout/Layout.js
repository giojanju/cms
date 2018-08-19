import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';
import TopBar from '../../components/Header/TopBar';
import Sidebar from '../../components/Header/Sidebar';
import Main from '../../components/Main/Main';
import axios from '../../axios';

class Layout extends Component {
	constructor(props) {
		super(props);

		let sidebar = true;
		if (window.innerWidth < 800) {
			sidebar = false;
		}

		this.state = {
			sidebar: sidebar,
			user: {},
		}

		this.handleLogout = this.handleLogout.bind(this);
	}

	componentDidMount() {
		this.props.checkAuth();

		axios.get('user').then(re => {
			this.setState({
				user: re.data.user,
			})
		})
		.catch(er => {
			console.log(er.response.data)
		})
	}

	handleLogout() {
		this.props.logout()
	}

	toggleSidebar() {
		this.setState({
			sidebar: !this.state.sidebar,
		});
	}

	render () {
		return (
			<div className="Wrapper">
				<TopBar 
					user={this.state.user}
					sidebar={this.state.sidebar} 
					toggleSidebar={() => this.toggleSidebar()} 
					logOut={this.handleLogout} 
				/>
				<Sidebar sidebar={this.state.sidebar} />
				<Main title={this.props.title} sidebar={this.state.sidebar}>
					{this.props.children}
				</Main>
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