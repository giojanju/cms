import React, { Component } from 'react';

class Home extends Component {
	componentDidMount() {
		this.props.history.push(`/cp`)
	}

	render() {
		return (
			<div>
				<h1>Home page</h1>
			</div>
		);
	};
}

export default Home;