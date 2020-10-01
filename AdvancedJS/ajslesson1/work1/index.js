

// Написать функцию map, которая будет принимать в качестве
// аргумента массив arr и функцию, которая в свою очередь будет
// осуществлять преобразование массива arr  в вид
// [ "<li class="list-group-item">Tom</li>", ....]
// и выводить элементы массива в ul с id="list"
// Вывод должен осуществляться в отсортированном по алфавиту виде

let arr = ["Tom", "Steve", "Bill", "Rita", "Pete", "Ashley"];
const list = document.getElementById('list');
function alphabeticalOrder(arr) {
	return arr.sort();
};
function makeListFromArray(arr) {
	for (let i = 0; i < arr.length; i++) {
		let item = document.createElement('li');
		item.setAttribute('class', 'list-group-item');
		item.appendChild(document.createTextNode(arr[i]));
		list.appendChild(item);
	}
	return list;
}
// Сигнатура map
function map(arr, makeListFromArray) {
	alphabeticalOrder(arr);
	makeListFromArray(arr);
	console.log(arr, 'sorted array');
	// todo
}
map(arr, makeListFromArray);
console.log(arr, 'sorted array after function');


