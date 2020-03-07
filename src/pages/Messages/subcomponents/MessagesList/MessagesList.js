import React from 'react';

import { Wrapper, Message, AuthorName } from './styling';

const MessagesList = ({ username, messages = [] }) => {
	return (
		<Wrapper data-testid='messages-list'>
			{messages.map(({ author, content, isPrivate, id }) => {
				const isAuthor = author === username;
				return (
					<Message
						key={id}
						isAuthor={isAuthor}
						isPrivate={isPrivate}
						data-testid='message-block'
					>
						{!isAuthor && <AuthorName>{author}</AuthorName>}
						<p>{content}</p>
					</Message>
				)
			})}
		</Wrapper>
	);
}
 
export default MessagesList;
