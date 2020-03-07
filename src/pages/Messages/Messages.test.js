import React from 'react';
import { render } from 'test-utils';
import Messages from './Messages';

test('Properly renders the <MessagesList /> and the <MessagesForm />', () => {
	const { getByTestId } = render(<Messages />);
	const messagesList = getByTestId('messages-list');
	const messagesForm = getByTestId('simple-form');

	expect(messagesList).toBeInTheDocument();
	expect(messagesForm).toBeInTheDocument();
});