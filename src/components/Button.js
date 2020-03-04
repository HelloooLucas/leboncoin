import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	${({ theme }) => ({ ...theme.neumorphism.outset })};
	width: ${({ square }) => square ? '50px' : '100px'};
	height: 50px;
	background: ${({ type, theme }) => type ? theme.colors[type] : theme.colors.background};
	cursor: pointer;
	outline: none;
	transition-duration: .5s;

	:active {
		${({ theme }) => ({ ...theme.neumorphism.inset })};
		background: ${({ type, theme }) => theme.colors[type] };
	}
`;

const Button = ({ type, handleClick, square, children }) => {
	return (
		<StyledButton
			type={type}
			onClick={handleClick}
			square={square}
		>
			{children}
		</StyledButton>
	);
}
 
export default Button;
