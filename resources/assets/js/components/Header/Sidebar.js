import React, { Component } from 'react';
import NavItem from '../Navigation/NavItem/NavItem';

class Sidebar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			navigation: [
				{
					label: 'Dashboard',
					icon: 'home',
					path: '/cp',
					// nested: [
					// 	{
					// 		label: 'Page 1',
					// 		path: '/cp1'
					// 	},
					// 	{
					// 		label: 'Page 2',
					// 		path: '/cp2'
					// 	},
					// ]
				},
				{
					label: 'Posts',
					icon: 'home',
					path: '/cp/Posts',
				},
			]
		};
	}

	render() {
		const sidebar = !this.props.sidebar ? '-260px' : '0px';
		return (
			<div className="left-sidebar" style={{marginLeft: sidebar}}>
				<div className="sidebar-scroll">
					<ul>
						{this.state.navigation.map((nav, i) => {
							return <NavItem 
										label={nav.label}
										icon={nav.icon}
										path={nav.path}
										nested={nav.nested}
										key={i}
									/>
						})}
					</ul>
				</div>
			</div>
		);
	}
}

export default Sidebar;