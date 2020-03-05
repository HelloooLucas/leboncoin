import styled from 'styled-components';

export const Label = styled.label`
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

export const Input = styled.input`
	display: none;
`;
