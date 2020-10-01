/* Начальные 3 цифры в каждом номере - это код оператора
Сделать вывод в консоль таким
(063) 111 1234
(333) 456 8768
(444) 657 5547
*/
let st =
	`063-111-1234
	(333) 456-8768
	4446575547`;
const regex = /\(?(\d{3})\)?(-|\s?)(\d{3})(-|\s?)(\d{4})/g;
const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
	e.preventDefault();
	console.log(st.replace(regex, '($1) $3 $5'));
})

