import React from 'react';

import './Button.css';

const button = (props) => {

	return (
		<div className="form-group">
			<button
				type='button'
				className={`btn btn-primary ` + props.Type}
				onClick={props.click}
			>{props.val}</button>
		</div>
	);
};

export default button;