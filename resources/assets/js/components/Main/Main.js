import React, { Component } from 'react';

import './Main.css';

class Main extends Component {

	render() {
		const width = this.props.sidebar ? 'calc(100% - 260px)' : '100%';

		return (
			<div className="main-sectio" style={{width: width}}>
				<h3 className="page-title">{this.props.title}</h3>
				<div className="main-section-inner">
					<div className="panel">
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}

export default Main;