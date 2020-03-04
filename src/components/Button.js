import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	${({ theme }) => ({ ...theme.neumorphism.outset })};
	width: ${({ square }) => square ? '50px' : '100px'};
	height: 50px;
	background: ${({ theme, color }) => color ? theme.colors[color] : theme.colors.background};
	cursor: pointer;
	outline: none;
`;

const Button = ({ type, color, handleClick, square, children }) => {
	return (
		<StyledButton
			type={type}
			color={color}
			onClick={handleClick}
			square={square}
		>
			{children}
		</StyledButton>
	);
}
 
export default Button;
