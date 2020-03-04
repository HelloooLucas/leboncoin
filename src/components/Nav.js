import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import { Button } from './';

const Wrapper = styled.nav`
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: space-between;
`;

const Icon = styled(FontAwesomeIcon)`
	font-size: ${({ theme }) => theme.fontSizes.xl};
	color: ${({ theme }) => theme.colors.disabled};
`;

const Greeting = styled.h3`
	font-size: ${({ theme }) => theme.fontSizes.xl };
`;

const Nav = ({ username, setUsername }) => {
	const handleLogout = () => setUsername('');
	return (
		<Wrapper>
			<Greeting>Your messages, {username}</Greeting>
			<Button handleClick={handleLogout} square>
				<Icon icon={faSignOutAlt} />
			</Button>
		</Wrapper>
	);
}
 
export default Nav;
