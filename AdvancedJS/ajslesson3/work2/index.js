
let outputText = document.querySelector('#out').textContent;
console.log(outputText);
let findWord = /(\bjavascript\b)/g;
const btn = document.querySelector('#btn');
btn.addEventListener('click', (e) => {
	e.preventDefault();
	console.log(outputText.replace(findWord, function (matched) {
		return matched.toUpperCase();
	}));
})