import React, { useState, useEffect } from "react";

// "https://swapi.dev/api/"

const Users = () => {
	const [names, setNames] = useState([]);

	useEffect(() => {
		fetch('https://swapi.dev/api/people')
			.then(response => response.json())
			.then(names => setNames(names.results))
	}, [])
	return (
		<ul>
			{names.map((user, index) => (
				<li key={index}>
					{user.name} - {user.gender}
				</li>
			))}
		</ul>
	);
};

export default Users;
