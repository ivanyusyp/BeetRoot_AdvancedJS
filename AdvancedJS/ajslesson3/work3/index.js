/* 
Код работает, но не защищен - клиентский код может удалить элементы массива  из-вне
Исправить этот недостаток 
*/
function getUsers() {
	const users = ["Bill"];
	return {
		addUser: function (name) {
			users.push(name);
			return users;
		},
		getUsers: function () {
			return [...users];
		}
	};
}

const u = getUsers();
u.addUser("Jim");
u.addUser("Paul");
console.log(u.getUsers()); // выведется [ 'Bill', 'Jim', 'Paul' ]

u.getUsers().pop(); // удаляем 2-й элемент массива
console.log(u.getUsers()); //  ['Bill', 'Jim']