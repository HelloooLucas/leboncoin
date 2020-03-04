import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
	${({ theme }) => ({ ...theme.neumorphism.inset })};
	${({ long }) => long ? ({ flex: 1 }) : ({ width: '250px' })}
	height: 50px;
	margin-right: 30px;
	padding-left: 20px;
	font-size: ${({ theme }) => theme.fontSizes.xl };
	outline: none;

	::placeholder {
		font-style: italic;
	}
`;

const TextInput = ({ value, onChange, placeholder, long }) => {
	return (
		<Input
			type='text'
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			long={long}
		/>
	);
}
 
export default TextInput;
