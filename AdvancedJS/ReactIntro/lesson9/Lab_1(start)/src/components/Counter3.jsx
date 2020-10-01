import React, { useState } from "react";

function initializeState() {
	return {
		count: 0,
		message: 'Counter'
	}
}
const Counter3 = () => {
	const [countOb, setCountOb] = useState(initializeState());
	const mergedState = state =>
		setCountOb(prev => ({
			...prev,
			...state
		}))

	const reset = () => mergedState({ count: 0 });

	const increment = () => mergedState({ count: countOb.count + 1 })

	const decrement = () => mergedState({ count: countOb.count - 1, message: 'Decrement' });
	return (
		<>
			<h1>
				{countOb.message}: {countOb.count}
			</h1>
			<button onClick={decrement} className="btn btn-primary mr-3">
				Decrement
      </button>
			<button onClick={reset} className="btn btn-warning mr-3">
				Reset
      </button>
			<button onClick={increment} className="btn btn-success">
				Increment
      </button>
		</>
	);
};

export default Counter3;
