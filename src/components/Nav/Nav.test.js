import React from 'react';
import { render } from 'test-utils';
import Nav from './Nav';

test('Renders the greetings and the logout button', () => {
	const { getByText, getByRole } = render(<Nav />);
	const greeting = getByText(/Your messages/i);
	const logoutButton = getByRole('button');

	expect(greeting).toBeInTheDocument();
	expect(logoutButton).toBeInTheDocument();
});

test('Passes the received username to the greeting', () => {
	const { getByText } = render(<Nav username='Lucas' />);
	const greeting = getByText(/Your messages/i);

	expect(greeting.textContent).toBe('Your messages, Lucas');
});
