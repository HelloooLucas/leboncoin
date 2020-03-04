import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
	${({ theme }) => ({ ...theme.neumorphism.inset })};
	${({ flex }) => flex ? ({ flex: flex }) : ({ width: '250px' })}
	height: 50px;
	margin-right: 30px;
	padding-left: 20px;
	font-size: ${({ theme }) => theme.fontSizes.xl };
	color: ${({ theme }) => theme.colors.darkDrey };
	outline: none;

	::placeholder {
		font-style: italic;
	}
`;

const TextInput = ({ value, onChange, placeholder, flex }) => {
	return (
		<Input
			type='text'
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			flex={flex}
		/>
	);
}
 
export default TextInput;
