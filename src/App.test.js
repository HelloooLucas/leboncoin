import React from 'react';
import { render, fireEvent } from 'test-utils';
import App from './App';

test('Renders only the <Login /> on site opening', () => {
	const { queryByTestId } = render(App);

	const login = queryByTestId('login');
	const nav = queryByTestId('nav');
	const messages = queryByTestId('messages');

	expect(login).toBeInTheDocument();
	expect(nav).not.toBeInTheDocument();
	expect(messages).not.toBeInTheDocument();
});

test('Renders the <Nav /> and the <Messages /> when a username is set', () => {
	const { queryByTestId, getByPlaceholderText, getByRole } = render(App);

	const textInput = getByPlaceholderText('Who are you? 👀');
	const submitButton = getByRole('button');

	fireEvent.change(textInput, { target: { value: 'Lucas' }});
	fireEvent.click(submitButton);

	const login = queryByTestId('login');
	const nav = queryByTestId('nav');
	const messages = queryByTestId('messages');

	expect(login).not.toBeInTheDocument();
	expect(nav).toBeInTheDocument();
	expect(messages).toBeInTheDocument();
});

test('Renders the <Login /> again if the user clicks the logout button after being authentified', () => {
	const { queryByTestId, getByPlaceholderText, getByRole, findByRole } = render(App);

	const textInput = getByPlaceholderText('Who are you? 👀');
	const submitButton = getByRole('button');

	fireEvent.change(textInput, { target: { value: 'Lucas' }});
	fireEvent.click(submitButton);

	const login = queryByTestId('login');
	const nav = queryByTestId('nav');
	const messages = queryByTestId('messages');

	expect(login).not.toBeInTheDocument();
	expect(nav).toBeInTheDocument();
	expect(messages).toBeInTheDocument();

	
});
