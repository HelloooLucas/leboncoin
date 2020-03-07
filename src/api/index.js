import axios from 'axios';
const apiUrl = 'http://localhost:3001/messages';

export const fetchMessages = (setMessages) =>
	axios.get(apiUrl)
		.then(response => {console.log('fetched'); setMessages(response.data)})
		.catch(error => console.log('Error while fetching messages'));

export const postMessage = message =>
	axios.post(apiUrl, message)
		.then(response => console.log(response.data))
		.catch(error => console.log('Error while posting message'));
