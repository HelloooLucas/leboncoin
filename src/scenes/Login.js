import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'

import { TextInput, Button, SimpleForm } from './../components';

const Wrapper = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Icon = styled(FontAwesomeIcon)`
	font-size: ${({ theme }) => theme.fontSizes.xl};
	color: ${({ theme }) => theme.colors.background};
`;

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
				<Button
					type='submit'
					color='confirm'
				>
					<Icon icon={faSignInAlt} />
				</Button>
			</SimpleForm>
		</Wrapper>
	);
}
 
export default Login;
