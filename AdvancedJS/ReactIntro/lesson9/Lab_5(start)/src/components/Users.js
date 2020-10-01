import React, { useState, useEffect, useRef } from "react";
function useRandomNames(initialValue) {
	const [inputValue, setInputValue] = useState(initialValue);
	const [loading, setLoading] = useState(false);
	const [names, setNames] = useState([]);
	const nameRef = useRef();
	debugger
	const handleInputChange = () => setInputValue(nameRef.current.value)

	useEffect(() => {
		if (inputValue) {
			setLoading(true);
			fetch(`https://uinames.com/api/?amount=5&region=${inputValue}`)
				.then(response => response.json())
				.then(names => {
					setNames(names);
					setLoading(false);
				})
		} else {
			setNames([])
		}
	}, [inputValue])
	return {
		inputValue,
		onChange: handleInputChange,
		loading,
		names,
		nameRef
	}
}
const Users = () => {
	const { inputValue, onChange, loading, names, nameRef } = useRandomNames();

	return (
		<div className="col-md-4">
			<div className="form-group">
				<label>Enter region</label>
				<input ref={nameRef} type="text" className="form-control mb-3" />
				<button onClick={onChange} className="btn btn-primary">Search</button>
			</div>
			{loading ? (
				<h1>...Loading...</h1>
			) : (
					<ul className="list-group">
						{names.lenght > 0 &&
							names.map((item, i) => (
								<li key={i} className="list-group-item">
									{item.name} - {item - gender}
								</li>
							))}
					</ul>
				)}
		</div>
	);
};

export default Users;
