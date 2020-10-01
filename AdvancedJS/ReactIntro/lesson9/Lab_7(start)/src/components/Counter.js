import React, { useReducer } from "react";

const initialState = { count: 0 };
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
function reducer(state, action) {
	switch (action.type) {
		case INCREMENT:
			return { count: state.count + 1 }
		case DECREMENT:
			return { count: state.count - 1 }
		case RESET:
			return { count: 0 }
		default:
			throw Error;
	}
}
const Counter = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const increment = () => dispatch({ type: INCREMENT });
	const decrement = () => dispatch({ type: DECREMENT });
	const reset = () => dispatch({ type: RESET });

	return (
		<>
			<h1>Counter: {state.count}</h1>
			<button onClick={decrement} className={"btn btn-primary mr-3"}>Decrement</button>
			<button onClick={reset} className={"btn btn-warning mr-3"}>Reset</button>
			<button onClick={increment} className={"btn btn-success mr-3"}>Increment</button>
		</>
	)
};

export default Counter;
