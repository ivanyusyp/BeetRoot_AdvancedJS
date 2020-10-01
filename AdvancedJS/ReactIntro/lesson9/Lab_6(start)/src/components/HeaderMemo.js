import React, { useState, useMemo } from "react";

const Header = props => {
	const [inputValue, setInputValue] = useState('');
	const handleInputChange = event => setInputValue(event.target.value)
	const reverseWord = word => {
		console.log('Function reverse word invoked')
		return word.split('')
			.reverse()
			.join('')
	};
	const title = 'Hello react';
	const titleReversed = useMemo(() => reverseWord(title), []);
	return (
		<div className={'col-md-5'}>
			<h1>{titleReversed}</h1>
			<div className={'form-group'}>
				<input
					value={inputValue}
					onChange={handleInputChange}
					className={'form-control'}
				/>
			</div>

		</div>
	)
};

export default Header;
