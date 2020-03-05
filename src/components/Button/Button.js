import React from 'react';

import { StyledButton } from './styling';

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
