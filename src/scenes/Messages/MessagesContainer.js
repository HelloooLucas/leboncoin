import React, { useState, useEffect } from 'react';

import MessagesList from './MessagesList';
import MessagesForm from './MessagesForm';
import { fetchMessages } from './../../api';

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
	}, [])
	useEffect(() => {
		shouldFetch && fetchMessages(setMessages);
		setShouldFetch(false);
	}, [shouldFetch]);
	return (
		<>
			<MessagesList username={username} messages={authorizedMessages} />
			<MessagesForm username={username} setShouldFetch={setShouldFetch} />
		</>
	);
}
 
export default MessagesContainer;
