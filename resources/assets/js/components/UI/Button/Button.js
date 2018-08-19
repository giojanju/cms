import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

const button = (props) => {

	let button = (
		<button
			type={props.submit ? 'submit' : 'button'}
			className={`btn btn-primary ` + props.Type}
			onClick={props.click}
		>{props.val}</button>
	);

	if (props.to) {
		button = (
			<Link
				to={props.to}
				className={`btn btn-primary ` + props.Type}
				onClick={props.click}
			>{props.val}</Link>
		);
	}

	return (
		<div className="form-group">
			{button}
		</div>
	);
};

export default button;