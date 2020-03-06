import React from 'react';
import { render, cleanup } from 'test-utils';
import App from './App';

afterEach(cleanup);

test('Renders only the <Login /> on site opening', () => {
	const { queryByTestId } = render(App);
	const login = queryByTestId('login');
	const nav = queryByTestId('nav');
	const messages = queryByTestId('messages');
	expect(login).toBeInTheDocument();
	expect(nav).not.toBeInTheDocument();
	expect(messages).not.toBeInTheDocument();
});

// test('Renders the <Nav /> and the <Messages /> when a username is set', () => {

// });
