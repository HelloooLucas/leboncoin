import React, { useState, useEffect } from 'react';

import { Wrapper } from './styling';
import { MessagesList, MessagesForm } from './subcomponents';
import { fetchMessages } from './../../api';

const Messages = ({ username }) => {
	const [messages, setMessages] = useState([]);
	const authorizedMessages = messages.filter(msg => !msg.isPrivate || msg.author === username);

	useEffect(() => {
		fetchMessages(setMessages);
		const intervalId = setInterval(() => {
			fetchMessages(setMessages);
		}, 3000);
		return () => clearInterval(intervalId);
	}, []);

	return (
		<Wrapper data-testid='messages'>
			<MessagesList
				username={username}
				messages={authorizedMessages}
			/>
			<MessagesForm
				username={username}
				setMessages={setMessages}
			/>
		</Wrapper>
	);
}
 
export default Messages;
