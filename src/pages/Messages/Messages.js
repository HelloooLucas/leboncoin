import React, { useState, useEffect } from 'react';

import { Wrapper } from './styling';
import { MessagesList, MessagesForm } from './subcomponents';
import { fetchMessages } from './../../api';

const Messages = ({ username }) => {
	const [messages, setMessages] = useState([]);
	const authorizedMessages = messages.filter(msg => !msg.isPrivate || msg.author === username);

	/*
	 * Dans le cadre de cet exercice, le système de polling mis en place n'a bien entendu pas de sens,
	 * car personne ne peut réellement m'envoyer de messages.
	 * Je l'ai fait pour simplement illustrer le fait que je sais le mettre en place.
	 * Dans un projet réel, si j'avais eu la main sur l'API j'aurais probablement mis en place
	 * un système de long polling, ou même de sockets via par exemple socket.io.
     */
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
