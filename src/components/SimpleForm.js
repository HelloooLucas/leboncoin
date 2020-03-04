import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
	display: flex;
`;

const SimpleForm = ({ handleSubmit, children }) => {
	return (
		<Form onSubmit={handleSubmit}>
			{children}
		</Form>
	)
}
 
export default SimpleForm;
