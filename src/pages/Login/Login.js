import React, { useState } from 'react';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

import { TextInput, Button, SimpleForm } from './../../components';
import { Wrapper, Icon } from './styling';

const Login = ({ setUsername }) => {
	const [userInput, setUserInput] = useState('');
	const handleChange = e => setUserInput(e.target.value);
	const handleSubmit = e => {
		e.preventDefault();
		setUsername(userInput)
	};

	return (
		<Wrapper>
			<SimpleForm handleSubmit={handleSubmit}>
				<TextInput onChange={handleChange} placeholder='Who are you? 👀' />
				<Button type='submit'>
					<Icon icon={faSignInAlt} />
				</Button>
			</SimpleForm>
		</Wrapper>
	);
}
 
export default Login;
