import React from 'react';
import { render, fireEvent, cleanup } from 'test-utils';

import Login from './Login';

afterEach(cleanup);

describe('<Login />', () => {
	const { getByPlaceholderText, getByRole } = render(Login);
	const textInput = getByPlaceholderText('Who are you? 👀');
	const submitButton = getByRole('button');
	const handleSubmit = jest.fn();

	test('renders the input field and the submit button', () => {
		expect(textInput).toBeInTheDocument();
		expect(submitButton).toBeInTheDocument();
	});
});

// test('Submit button doesn\'t do anything when field is empty', () => {
// 	const { getByRole, getByPlaceholderText } = render(Login);
// 	const submitButton = getByRole('button');
// 	const textInput = getByPlaceholderText('Who are you? 👀');
	// expect(submitButton).toBeInTheDocument();
	// expect(textInput).toBeInTheDocument();
// });

// test('<Login /> disappears when a name is submitted to the field', () => {
// 	const { getByRole, getByPlaceholderText, queryByTestId } = render(Login);
// 	const submitButton = getByRole('button');
// 	const textInput = getByPlaceholderText('Who are you? 👀');
// 	fireEvent.change(textInput, { target: { username: 'lucas' }});
// 	fireEvent.click(submitButton);
// 	const login = queryByTestId('login');
// 	expect(login).not.toBeInTheDocument();
// });
