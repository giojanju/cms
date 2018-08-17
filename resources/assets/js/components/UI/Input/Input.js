import React from 'react';

import './Input.css';

const input = (props) => {

	return (
		<div className="form-group">
			<input
				type={props.Type} 
				value={props.val} 
				className="form-control"
				placeholder={props.plc}
			/>
		</div>
	);
};

export default input;