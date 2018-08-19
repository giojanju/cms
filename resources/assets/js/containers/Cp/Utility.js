import React from 'react';
import * as env from '../../config/env'; 

const renderlangTabs = (callback) => {
	return env.locales.map((locale, i) => {
		return (
			<div
				key={i} 
				className={`tab-pane fade ${i == 0 ? 'show active' : ''}`}
				id={locale.code} 
				role="tabpanel" 
				aria-labelledby={`${locale.code}-tab`}
			>
		        { callback(locale.code) }
			</div>
		); 
    });
}

export {
	renderlangTabs
}