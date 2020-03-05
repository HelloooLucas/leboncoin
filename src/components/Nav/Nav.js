import React from 'react';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import { Button } from './../';
import { Wrapper, Greeting, Icon } from './styling';

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
