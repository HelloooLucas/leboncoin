import React, { useState } from 'react';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';

import { postMessage, fetchMessages } from './../../../../api';
import { SendIcon, PrivateIcon } from './styling';
import { SimpleForm, TextInput, Button } from './../../../../components';
import { Checkbox } from './subcomponents';

const MessagesForm = ({ username, setMessages }) => {
	// const reset = () => {
	// 	axios.delete('http://localhost:3001/messages/5')
	// 	axios.delete('http://localhost:3001/messages/6')
	// 	axios.delete('http://localhost:3001/messages/7')
	// 	axios.delete('http://localhost:3001/messages/8')
	// 	axios.delete('http://localhost:3001/messages/9')
	// 	axios.delete('http://localhost:3001/messages/10')
	// 	axios.delete('http://localhost:3001/messages/11')
	// 	axios.delete('http://localhost:3001/messages/12')
	// 	axios.delete('http://localhost:3001/messages/13')
	// 	axios.delete('http://localhost:3001/messages/14')
	// 	axios.delete('http://localhost:3001/messages/15')
	// 	axios.delete('http://localhost:3001/messages/16')
	// 	axios.delete('http://localhost:3001/messages/17')
	// 	axios.delete('http://localhost:3001/messages/18')
	// }
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
		<SimpleForm handleSubmit={handleSubmit}>
			{/* <button onClick={reset}>RESET</button> */}
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
				<PrivateIcon icon={checboxIcon} isPrivate={isPrivate} />
			</Checkbox>
			<Button type="submit">
				<SendIcon icon={faPaperPlane} />
			</Button>
		</SimpleForm>
	);
}
 
export default MessagesForm;
