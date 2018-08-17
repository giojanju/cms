import React from 'react';
import { NavLink } from 'react-router-dom'

const layout = (props) => {
	return (
		<div>
			<div>
				<ul>
					<li><NavLink to="/dashboard">Dashboard</NavLink></li>
					<li><NavLink exact to="/">Home</NavLink></li>
					<li><NavLink to="/login">Login</NavLink></li>
				</ul>
			</div>			
			<div>Text</div>			
			{props.children}
			<div>Footer</div>			
		</div>
	);
};

export default layout;