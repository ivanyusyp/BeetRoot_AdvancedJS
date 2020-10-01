const BASEURL = 'https://jsonplaceholder.typicode.com/';
const output = document.querySelector('#output');
const table = document.querySelector('#table');
function getUsers(users) {
	return users
		.map(user =>
			`<tr>
			<td>${user.id}</td>
		<td>${user.title}</td>
		<td>${user.body}</td>
		<td><a href="#" id=${user.id}> User about</a></td>
		</tr>`)
		.join('')
}
function getUserInfo(users, element) {
	const getUserWithThisId = users.find(user => user.id == element);
	return `
	<p>name: ${getUserWithThisId.name}</p>
	<p>username: ${getUserWithThisId.username}</p>
	<p>email: ${getUserWithThisId.email}</p>
	<span id=${getUserWithThisId.name}>close</span>
	`
}
const fetchForPosts = () =>
	fetch(`${BASEURL}posts?userId=1`)
		.then(users => users.json())
		.then((users) => {
			table.innerHTML = getUsers(users);
			console.log(users);
		});
const fetchForUsersAbout = (element) =>
	fetch(`${BASEURL}users`)
		.then(users => users.json())
		.then((users) => {
			const currentElement = document.getElementById(`${element}`);
			currentElement.innerHTML = getUserInfo(users, element);
		});
window.onload = () => {
	fetchForPosts();
}
table.addEventListener('click', (e) => {
	e.preventDefault();
	const item = e.target;
	const element = item.id;
	if (element) {
		fetchForUsersAbout(element);
	}
	// item.addEventListener('click', (e) => {
	// 	e.preventDefault();
	// 	console.log(e.target);
	// 	const currentElement = e.target;
	// 	const currentElementId = currentElement.id;
	// 	if (currentElementId) {
	// 		console.log(currentElementId);
	// 	}
	// })

})





