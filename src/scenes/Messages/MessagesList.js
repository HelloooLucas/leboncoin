import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100%;
	flex: 1;
`;

const MessagesList = ({ username, messages }) => {
	return (
		<Wrapper>
			<ul>
				{messages.map(({ author, content, id }) => (
					<li key={id}>
						<h3>{author}</h3>
						<p>{content}</p>
					</li>
				))}
			</ul>
		</Wrapper>
	);
}
 
export default MessagesList;
