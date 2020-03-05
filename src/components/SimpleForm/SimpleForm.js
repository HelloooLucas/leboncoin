import React from 'react';

import { Form } from './styling';

const SimpleForm = ({ handleSubmit, children }) => {
	return (
		<Form onSubmit={handleSubmit}>
			{children}
		</Form>
	)
}
 
export default SimpleForm;
