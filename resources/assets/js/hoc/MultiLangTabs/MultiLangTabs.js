// MultiLangTabs
import React, { Component } from 'react';
import axios from '../../axios';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Img from '../../components/UI/Img/Img';
import * as env from '../../config/env'; 

class MultiLangTabs extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="tab-container">
				<ul className="nav nav-tabs" id="myTab" role="tablist">
					{env.locales.map((locale, i) => {
						return (
							<li key={i} className="nav-item">
							    <a 
							    	className={`nav-link${i == 0 ? ' active' : ''}`} 
							    	id={`${locale.code}-tab`} 
							    	data-toggle="tab" 
							    	href={`#${locale.code}`} 
							    	role="tab" 
							    	aria-controls={locale.code} 
							    	aria-selected="true"
							    >
							    <Img img={locale.flag} mx={18} />
							    {locale.name}
							    </a>
							</li>
						); 
					})}
				</ul>
				<div className="tab-content" id="myTabContent">
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default MultiLangTabs;