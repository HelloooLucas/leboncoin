import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	${({ theme }) => ({ ...theme.neumorphism.outset })};
	width: 100px;
	height: 50px;
	background: ${({ theme, color }) => color ? theme.colors[color] : theme.colors.background};
	cursor: pointer;
	outline: none;
`;

const Button = ({ type, color, children }) => {
	return (
		<StyledButton
			type={type}
			color={color}
		>
			{children}
		</StyledButton>
	);
}
 
export default Button;
