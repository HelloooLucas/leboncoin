import axios from 'axios';
const apiUrl = 'http://localhost:3001/messages';

export const fetchMessages = setMessages =>
	axios
		.get(apiUrl)
		.then(response => setMessages(response.data))
		.catch(error => console.log('Error while fetching messages'));

export const postMessage = message =>
	axios
		.post(apiUrl, message)
		.catch(error => console.log('Error while posting message'));
