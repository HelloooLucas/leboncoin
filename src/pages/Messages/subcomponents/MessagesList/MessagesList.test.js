import React from 'react';
import { render } from 'test-utils';
import MessagesList from './MessagesList';

describe('Should render the right amount of messages, ', () => {

	test('when there are no messages', () => {
		const { queryAllByTestId } = render(<MessagesList />);
		const messages =  queryAllByTestId('message-block');
		expect(messages).toHaveLength(0);
	});

	test('when there are three messages', () => {
		const mockMessages = [
			{
				"id": 0,
				"author": "Paul",
				"content": "Wassup guys, vous faites quelque chose ce soir ?",
				"isPrivate": false
			},
			{
				"id": 1,
				"author": "Paul",
				"content": "Wassup guys, vous faites quelque chose ce soir ?",
				"isPrivate": false
			},
			{
				"id": 2,
				"author": "Paul",
				"content": "Wassup guys, vous faites quelque chose ce soir ?",
				"isPrivate": false
			},
		]
		const { queryAllByTestId } = render(<MessagesList messages={mockMessages} />);
		const messages =  queryAllByTestId('message-block');
		expect(messages).toHaveLength(3);
	});

});