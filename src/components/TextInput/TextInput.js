import React from 'react';

import { Input } from './styling';

const TextInput = ({ value, onChange, placeholder, long }) => {
	return (
		<Input
			type='text'
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			long={long}
		/>
	);
}
 
export default TextInput;
