import React from 'react';

import { Label, Input } from './styling';

const Checkbox = ({ id, value, onChange, children }) => {
	const isChecked = value;
	return (
		<Label
			htmlFor={id}
			isChecked={isChecked}
			data-testid='checkbox'
		>
			<Input
				type="checkbox"
				id={id}
				value={value}
				onChange={onChange}
			/>
			{children}
		</Label>
	);
}
 
export default Checkbox;
