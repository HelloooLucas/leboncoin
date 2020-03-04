import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import MessagesList from './MessagesList';
import MessagesForm from './MessagesForm';
import { fetchMessages } from './../../api';

const Wrapper = styled.div`
	width: 100%;
	height: calc(100vh - 150px);
	display: flex;
	flex-direction: column;
`;

const MessagesContainer = ({ username }) => {
	const [messages, setMessages] = useState([]);
	const [shouldFetch, setShouldFetch] = useState(true);
	const authorizedMessages = messages.filter(msg => !msg.isPrivate || msg.author === username);

	useEffect(() => {
		fetchMessages(setMessages);
		const intervalId = setInterval(() => {
			fetchMessages(setMessages);
		}, 3000);
		return () => clearInterval(intervalId);
	}, []);

	useEffect(() => {
		shouldFetch && fetchMessages(setMessages);
		setShouldFetch(false);
	}, [shouldFetch]);

	return (
		<Wrapper>
			<MessagesList username={username} messages={authorizedMessages} />
			<MessagesForm username={username} setShouldFetch={setShouldFetch} />
		</Wrapper>
	);
}
 
export default MessagesContainer;
