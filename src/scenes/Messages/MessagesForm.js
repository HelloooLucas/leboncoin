import React, { useState } from 'react';
import axios from 'axios';

import { postMessage } from './../../api';

const MessagesForm = ({ username, setShouldFetch }) => {
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
	const handleContentChange = e => setContent(e.target.value);
	const handleIsPrivateChange = () => setIsPrivate(!isPrivate);
	const handleSubmit = e => {
		e.preventDefault();
		if (content) {
			postMessage({ content, isPrivate , author: username });
			setContent('');
			setIsPrivate(false);
			setShouldFetch(true);
		}
	};
	return (
		<form onSubmit={handleSubmit}>
			{/* <button onClick={reset}>RESET</button> */}
			<input type="text" value={content} onChange={handleContentChange} />
			<label htmlFor="isPrivate"></label>
			<input name="isPrivate" type="checkbox" value={isPrivate} onChange={handleIsPrivateChange} />
			<button type="submit">Send</button>
		</form>
	);
}
 
export default MessagesForm;
