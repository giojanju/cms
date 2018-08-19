import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Img from '../UI/Img/Img';

import './Header.css';

class TopBar extends Component {

	constructor (props) {
		super(props);

		this.state = {
			userdropdown: false
		};
	}

	showUserDropdown() {
		this.setState({
			userdropdown: !this.state.userdropdown,
		})
	}

	render() {
		return (
			<nav className="navbar navbar-default fixed-top">
				<div className="brand">
					<Link to="/cp">
						<Img 
							img="logo.png"
							mx={138}
						/>
					</Link>
				</div>
				<div className="container-fluid">
					<div className="navbar-btn">
						<button style={{transform: !this.props.sidebar ? 'rotate(180deg)' : ''}} type="button" onClick={this.props.toggleSidebar} className="btn-toggle-fullwidth"><i className="lnr lnr-arrow-left-circle"></i></button>
					</div>

					<div id="navbar-menu">
						<ul className="nav navbar-nav navbar-right">
							<li className="dropdown">
								<a onClick={() => this.showUserDropdown()} className="dropdown-toggle" data-toggle="dropdown"><img src="assets/img/user.png" className="img-circle" alt="Avatar" /> <span>{this.props.user.name}</span> <i className="icon-submenu lnr lnr-chevron-down"></i></a>
								<ul className={`dropdown-menu ${this.state.userdropdown ? ' show' : ''}`}>
									<li><a href="#"><i className="lnr lnr-user"></i> <span>My Profile</span></a></li>
									<li><a href="#"><i className="lnr lnr-cog"></i> <span>Settings</span></a></li>
									<li><a onClick={this.props.logOut} href="#"><i className="lnr lnr-exit"></i> <span>Logout</span></a></li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
} 

export default TopBar