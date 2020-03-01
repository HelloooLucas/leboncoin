import React, { useState } from 'react';

const Login = ({ setUsername }) => {
	const [userInput, setUserInput] = useState('');
	const handleChange = e => setUserInput(e.target.value);
	const handleSubmit = () => setUsername(userInput);
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor='user-input'>Username</label>
			<input name='user-input' onChange={handleChange} />
			<button type='submit'>Log in</button>
		</form>
	);
}
 
export default Login;
