
/*
1.  В элемент select вывести сгруппированный возраст
	 пользователей
То есть у нас 9 пользователей и их возраст 20, 30, 40
Элемент select должен получится таким
 
<select>
	 <option value="-1">Choose age</option>
	 <option value="20">20</option>
	 <option value="30">30</option>
	 <option value="40">40</option>
</select>
 
 
2. При выборе соответствующего option осуществить вывод
	 пользователей соответствующих выбранному возрасту
	 в элемент <div id="res"></div>
То есть при выборе например 20 должны вывестись  John, Ashley, Willy
*/


const usersSelect = document.getElementById('users-select');
const res = document.getElementById('res');

let users = [
	{ id: 1, name: "John", age: "20" },
	{ id: 2, name: "Sasha", age: "30" },
	{ id: 3, name: "Bill", age: "40" },
	{ id: 4, name: "Ashley", age: "20" },
	{ id: 5, name: "Rachel", age: "40" },
	{ id: 6, name: "Tom", age: "30" },
	{ id: 7, name: "Steve", age: "30" },
	{ id: 8, name: "Jim", age: "40" },
	{ id: 9, name: "Willy", age: "20" }
];

users.sort(function (a, b) {
	if (a.age < b.age) { return -1; }
	if (a.age > b.age) { return 1; }
	return 0;
});

function setAgeValueForSelect(users) {
	let defaultSelectValue = usersSelect.firstElementChild;
	console.log(defaultSelectValue);
	defaultSelectValue.setAttribute('value', '-1');
	for (let i = 0; i < users.length; i++) {
		let option = document.createElement('option');
		option.setAttribute('value', users[i].age);
		option.appendChild(document.createTextNode(users[i].age));
		usersSelect.appendChild(option);
		console.log(users[i].age, 'arr');
	}
	const options = []

	document.querySelectorAll('#users-select > option').forEach((option) => {
		if (options.includes(option.value)) option.remove()
		else options.push(option.value)
	})

};
function sortUsersByAge(e) {
	if (e == -1) {
		res.innerHTML = '';
	} else {
		const filteredUsersByAge = users.filter(users => users.age == e);
		console.log(filteredUsersByAge);
		filteredUsersByAge.forEach(item => {
			let list = document.createElement('ul');
			let listItems = document.createElement('li');
			listItems.innerHTML = item.name;
			list.appendChild(listItems);
			res.appendChild(list);
		})
	}
}


usersSelect.addEventListener('change', (e) => {
	e.preventDefault();
	res.innerHTML = '';
	sortUsersByAge(e.target.value);
	console.log(e.target.value);

})
setAgeValueForSelect(users);

console.log(users, 'sorted array');
