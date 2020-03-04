import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100%;
	padding-top: 50px;
	margin-bottom: 50px;
	flex: 1;
	display: flex;
	flex-direction: column;
	overflow: scroll;
`;

const Message = styled.div`
	${({ theme }) => ({ ...theme.neumorphism.outset })};
	width: auto;
	max-width: 60%;
	padding: 12px 24px 12px 12px;
	margin-bottom: 24px;
	font-size: ${({ theme }) => theme.fontSizes.l };
	color: ${({ theme }) => theme.colors.background };
	${({ isAuthor, theme }) =>
		isAuthor ? ({
			alignSelf: 'flex-end',
			background: theme.colors.enabled,
			textAlign: 'right',
			padding: '12px 12px 12px 24px',
			marginRight: 15,
		})
		: ({
			alignSelf: 'flex-start',
			background: theme.colors.lightGrey,
		})
	}
`;

const AuthorName = styled.h3`
	font-weight: bold;
	margin-bottom: 8px;
`;

const MessagesList = ({ username, messages }) => {
	return (
		<Wrapper>
			{messages.map(({ author, content, id }) => {
				const isAuthor = author === username;
				return (
					<Message key={id} isAuthor={isAuthor}>
						{!isAuthor && <AuthorName>{author}</AuthorName>}
						<p>{content}</p>
					</Message>
				)
			})}
		</Wrapper>
	);
}
 
export default MessagesList;
