import React from 'react';

import * as helpers from '../../../helpers/generalHelper';
import './Img.css';

const img = (props) => {

	let classname = 'img-responsive';
	if (props.center) {
		classname += ' img-center'
	}

	return (
		<img 
			src={helpers.asset(props.img)} 
			className={classname} 
			style={{maxWidth: props.mx}} 
		/>
	);
};

export default img;