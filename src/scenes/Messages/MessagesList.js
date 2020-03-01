import React from 'react';

const MessagesList = ({ username, messages }) => {
	return (
		<>
			<h2>Hello, {username}</h2>
			<ul>
				{messages.map(({ author, content, id }) => (
					<li key={id}>
						<h3>{author}</h3>
						<p>{content}</p>
					</li>
				))}
			</ul>
		</>
	);
}
 
export default MessagesList;
