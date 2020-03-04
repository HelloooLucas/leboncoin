import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
	${({ theme, isChecked }) => isChecked ? ({ ...theme.neumorphism.inset }) : ({ ...theme.neumorphism.outset })};
	width: 50px;
	height: 50px;
	margin-right: 60px;
	outline: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Input = styled.input`
	display: none;
`;

const Checkbox = ({ id, value, onChange, children }) => {
	const isChecked = value;
	return (
		<Label htmlFor={id} isChecked={isChecked}>
			<Input
				type="checkbox"
				id={id}
				value={value}
				onChange={onChange}
			/>
			{children}
		</Label>
	);
}
 
export default Checkbox;
