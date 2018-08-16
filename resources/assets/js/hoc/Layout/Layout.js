import React from 'react';

const layout = (props) => {
	return (
		<div>
			<div>Header</div>			
			<div>Text</div>			
			{props.children}
			<div>Footer</div>			
		</div>
	);
};

export default layout;