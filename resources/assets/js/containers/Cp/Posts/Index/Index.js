import React, { Component } from 'react';
import Button from '../../../../components/UI/Button/Button';

class Create extends Component {

	render() {
		return (
			<div>
				<h1>Post Index</h1>
				<Button
					Type="primary"
					val="Create post"
					to="Posts/Create"
				/>
			</div>
		);
	}
}

export default Create;