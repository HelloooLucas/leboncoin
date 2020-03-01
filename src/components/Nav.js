import React from 'react';

const Nav = ({ username, setUsername }) => {
	const handleLogout = () => setUsername('');
	return (
		<>
			<h3>Hi, {username}</h3>
			<button onClick={handleLogout}>Log out</button>
		</>
	);
}
 
export default Nav;
