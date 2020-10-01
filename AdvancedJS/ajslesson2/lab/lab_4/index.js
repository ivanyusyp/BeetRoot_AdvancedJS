/* Todo:
				Реализовать функцию которая бы при клике на любой из элементов
				box присваивала стиль background-color: red
				 */

const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");

function fn(box) {
	return function (eventName) {
		return function (color) {
			box.addEventListener(eventName, function (e) {
				e.preventDefault();
				box.style.backgroundColor = color;
			})
		}
	}
}
// usage
fn(box1)("click")("red");
fn(box2)("click")("green");
fn(box3)("click")("teal");

// function sum(a) {
// 	return function (b) {
// 		return function (c) {
// 			return a + b + c;
// 		}
// 	}
// }
// console.log(sum(2)(2)(2));