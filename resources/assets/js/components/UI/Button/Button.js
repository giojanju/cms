import React from 'react';

import './Button.css';

const button = (props) => {

	return (
		<div className="form-group">
			<button
				type={props.Type}
				className={`btn btn-primary ` + props.Type}
			>{props.val}</button>
		</div>
	);
};

export default button;