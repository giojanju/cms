import React from 'react';

import * as utility from '../../Utility/Utility';
import './Input.css';

const input = (props) => {

	let label = '';

	if (props.label) {
		<label htmlFor={props.name}>{props.label ? props.label : props.plc}</label>
	}

	return (
		<div className="form-group">
			{label}
			<input
				type={props.Type} 
				value={props.val}
				id={props.name}
				name={props.name} 
				className={`form-control ${utility.hasErrorFor(props.name, props.errors) ? 'is-invalid' : ''}`}
				placeholder={props.plc}
				onChange={props.change}
			/>
			{utility.renderErrorFor(props.name, props.errors, utility.hasErrorFor(props.name, props.errors))}
		</div>
	);
};

export default input;