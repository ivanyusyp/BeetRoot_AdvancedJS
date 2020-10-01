/*
			* Создать функцию filter(arr, fn), которая
			*  - принимает в качестве аргументов массив arr и функцию fn
			*  - возвращает новый массив, который содержит только те элементы arr,  для которых fn возвращает true.
			*/

// const arr = [11, 66, 33, 44, 22, 55, 2];

// function filter(arr, fn) {
// 	// to do
// }

// // Проверка - вернуть массив с элементами значение которых больше 50
// const filteredArr = filter(arr, function (item) {
// 	// to do
// });

// console.log(filteredArr); //   [66, 55]]

const arr = [11, 66, 33, 44, 22, 55, 2];
const filteredArr = arr.filter(item => item > 50);
console.log(filteredArr); //   [66, 55]]