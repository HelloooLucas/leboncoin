import React from 'react';
import { render, fireEvent } from 'test-utils';
import '@testing-library/jest-dom/extend-expect'

import Login from './Login';

test('Renders the input field and the submit button', () => {
	const { getByPlaceholderText, getByRole } = render(<Login />);
	const textInput = getByPlaceholderText('Who are you? 👀');
	const submitButton = getByRole('button');
	expect(textInput).toBeInTheDocument();
	expect(submitButton).toBeInTheDocument();
});

test('Controlled component updates and reads the state properly', () => {
	const { getByPlaceholderText } = render(<Login />);
	const textInput = getByPlaceholderText('Who are you? 👀');
	expect(textInput.value).toBe('');

	fireEvent.change(textInput, { target: { value: 'Lucas' }});
	expect(textInput.value).toBe('Lucas');
});
