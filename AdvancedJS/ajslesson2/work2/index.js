/*
 * Написать функцию sum(a), которая должна вызываться как
 *    sum(a)(b)  и возвращать сумму двух чисел
 *   Например  sum(3)(1) -> 4  , sum(7)(-1) -> 6
 * */
function sum(a) {
	return function (b) {
		console.log(a + b);
	}
}
sum(7)(-2);