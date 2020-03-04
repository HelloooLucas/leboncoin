import React from 'react';
import styled from 'styled-components';

import { Button } from './';

const Wrapper = styled.nav`
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: space-between;
`;

const Greeting = styled.h3`
	font-size: ${({ theme }) => theme.fontSizes.xl };
`;

const Nav = ({ username, setUsername }) => {
	const handleLogout = () => setUsername('');
	return (
		<Wrapper>
			<Greeting>Your messages, {username}</Greeting>
			<Button onClick={handleLogout} square>Log out</Button>
		</Wrapper>
	);
}
 
export default Nav;
