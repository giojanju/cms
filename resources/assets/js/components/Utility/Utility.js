import React from 'react';

// validation Feedback
export const hasErrorFor = (field, errors) => {
	return errors[field];
}

export const renderErrorFor = (field, errors, hasErrorFor) => {
	if (hasErrorFor) {
		return (
			<span className='invalid-feedback'>
              	<strong>{errors[field][0]}</strong>
            </span>
		);
	}
}