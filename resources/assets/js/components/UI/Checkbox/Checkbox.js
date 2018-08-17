import React from 'react';

import './Checkbox.css';

const button = (props) => {

	return (
		<div className="form-group">
			<div className="form-group clearfix">
				<label className="fancy-checkbox element-left">
					<input type="checkbox" />
					<span>{props.label}</span>
				</label>
			</div>
		</div>
	);
};

export default button;