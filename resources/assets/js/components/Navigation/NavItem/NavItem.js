import React from 'react';
import { NavLink } from 'react-router-dom';

const navitem = (props) => {
	let nested_icon = '';
	let nested_navigation = '';

	if (props.nested) {
		nested_icon = <i className="icon-submenu lnr lnr-chevron-left"></i>;

		nested_navigation = (
			<div className="sub-menu">
				{props.nested.map((el, i) => {
					return (<NavLink key={i} to={el.path} exact={el.exact}>{el.label}</NavLink>)
				})}
			</div>
		);
	}

	return (
		<li>
			<NavLink to={props.path}>
				<i className={`lnr lnr-${props.icon}`}></i>
				<span>{props.label}</span>
				{nested_icon}
			</NavLink>
			{nested_navigation}
		</li>
	);
}

export default navitem;