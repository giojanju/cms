import React from 'react';

import './Img.css';

const img = (props) => {

	let classname = 'img-responsive';
	if (props.center) {
		classname += ' img-center'
	}

	return (
		<img 
			src={props.src} 
			className={classname} 
			style={{maxWidth: props.mx}} 
		/>
	);
};

export default img;