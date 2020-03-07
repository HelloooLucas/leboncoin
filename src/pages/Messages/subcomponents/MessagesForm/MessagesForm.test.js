import React from 'react';
import { render, fireEvent } from 'test-utils';
import MessagesForm from './MessagesForm';
import { theme } from './../../../../style';

test('Renders the input field, the checkbox and the submit button', () => {
	const { getByPlaceholderText, getByRole, getByTestId } = render(<MessagesForm />);
	const textInput = getByPlaceholderText('Type a message...');
	const checkbox = getByTestId('checkbox');
	const checkboxStyles = getComputedStyle(checkbox);
	const submitButton = getByRole('button');

	expect(textInput).toBeInTheDocument();
	expect(checkbox).toBeInTheDocument();
	expect(checkboxStyles['box-shadow']).toBe(`5px 5px 10px ${theme.colors.darker}, -5px -5px 10px ${theme.colors.lighter}`)
	expect(submitButton).toBeInTheDocument();
});

test('Text input component updates and reads the state properly: ', () => {
	const { getByPlaceholderText } = render(<MessagesForm />);
	const textInput = getByPlaceholderText('Type a message...');

	fireEvent.change(textInput, { target: { value: 'Lucas' }});

	expect(textInput.value).toBe('Lucas');
});

test('Checkbox styles get properly updated ', () => {
	const { getByTestId } = render(<MessagesForm />);
	const checkbox = getByTestId('checkbox');

	fireEvent.click(checkbox);

	const checkboxStyles = getComputedStyle(checkbox);
	expect(checkboxStyles['box-shadow']).toBe(`inset 3px 3px 6px ${theme.colors.darker}, inset -3px -3px 6px ${theme.colors.lighter}`);
});

test('Text input gets emptied when the submit button is clicked', () => {
	const { getByPlaceholderText, getByRole } = render(<MessagesForm />);
	const textInput = getByPlaceholderText('Type a message...');
	const submitButton = getByRole('button');

	fireEvent.change(textInput, { target: { value: 'Lucas' }});
	fireEvent.click(submitButton);

	expect(textInput.value).toBe('');
});

