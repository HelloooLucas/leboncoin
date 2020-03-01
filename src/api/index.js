import axios from 'axios';
const apiUrl = 'http://localhost:3001/messages';

export const fetchMessages = (setMessages) =>
	axios.get(apiUrl)
		.then(response => setMessages(response.data))
		.catch(error => console.log('error'));

export const postMessage = message =>
	axios.post(apiUrl, message)
		.then(response => console.log(response.data))
		.catch(error => console.log('error'));
