import React, { useState } from 'react';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import { postMessage, fetchMessages } from './../../../../api';
import { SendIcon, PrivateIcon } from './styling';
import { SimpleForm, TextInput, Button, Checkbox } from './../../../../components';

const MessagesForm = ({ username, setMessages }) => {
	const [content, setContent] = useState('');
	const [isPrivate, setIsPrivate] = useState(false);
	const checboxIcon = isPrivate ? faEyeSlash : faEye;
	const handleContentChange = e => setContent(e.target.value);
	const handleIsPrivateChange = () => setIsPrivate(!isPrivate);
	const handleSubmit = e => {
		e.preventDefault();
		if (content) {
			postMessage({ content, isPrivate , author: username });
			setContent('');
			fetchMessages(setMessages);
		}
	};
	return (
		<SimpleForm	handleSubmit={handleSubmit}>
			<TextInput
				value={content}
				onChange={handleContentChange}
				placeholder='Type a message...'
				long
			/>
			<Checkbox
				id='isPrivate'
				value={isPrivate}
				onChange={handleIsPrivateChange}
			>
				<PrivateIcon icon={checboxIcon} isprivate={isPrivate ? 1 : 0} />
			</Checkbox>
			<Button type="submit">
				<SendIcon icon={faPaperPlane} />
			</Button>
		</SimpleForm>
	);
}
 
export default MessagesForm;
