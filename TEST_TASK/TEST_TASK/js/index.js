const basket = {
};
const productAddButton = document.querySelectorAll('.product-box__btn');
const productAddButtonArray = Array.from(productAddButton);
productAddButtonArray.forEach(item =>
	item.addEventListener('click', (e) => {
		e.preventDefault();
		const quantityAndAmountOfGoods = document.querySelector('.top-cart-info__item');
		const quantityOfGoods = quantityAndAmountOfGoods.firstElementChild;
		const priceOfGoods = quantityAndAmountOfGoods.lastElementChild;
		const name = e.path[2].id;
		const price = e.path[2].dataset.dishPrice;
		const amountOfElement = document.querySelector(`#${name} input`);
		basket[name] = {
			amount: +amountOfElement.value || 0,
			price: +price
		}
		const basketArray = Object.values(basket);
		const amountOfPurchases = basketArray.reduce((total, current) => {
			return (current.amount * current.price) + total;
		},
			0
		);
		const sumOfNumbers = basketArray.reduce((total, current) => {
			return total + current.amount;
		},
			0
		)
		quantityOfGoods.innerHTML = '';
		quantityOfGoods.innerHTML = sumOfNumbers;
		priceOfGoods.innerHTML = '';
		priceOfGoods.innerHTML = amountOfPurchases;
		// console.log(amountOfPurchases, '=============SUM==============');
	}))
const productBox = document.querySelector('.products-box');
const inputElements = document.getElementsByClassName('qty__item');
const inputElementsArray = Array.from(inputElements);
inputElementsArray.forEach(item => {
	item.min = 0;
});
function filteredByPrice(a, filteredTypes, isInitialCall) {
	const priceItems = filteredTypes || document.querySelectorAll("[data-dish-price]");
	const priceItemsArray = Array.from(priceItems);
	const typeSelect = document.querySelector('#category-select').value;
	if (a != 0) {
		priceItemsArray.forEach(item =>
			item.style.display = 'none'
		)
		const filtered = priceItemsArray.filter(element => +(element.dataset.dishPrice) <= a);
		// console.log(filtered);
		filtered.forEach(item =>
			item.style.display = 'flex'
		)
		if (typeSelect && isInitialCall) {
			filteredByType(typeSelect, filtered);
		}
	}
	else {
		priceItemsArray.forEach(item =>
			item.style.display = 'flex'
		)
		if (typeSelect && isInitialCall) {
			filteredByType(typeSelect);
		}
		// console.log(priceItemsArray);
	}

};
function filteredByType(a, filtered, isInitialCall) {
	const typeItems = filtered || document.querySelectorAll("[data-dish-type]");
	const typeItemsArray = Array.from(typeItems);
	const priceSelect = document.querySelector('#price-select').value;
	if (a != 0) {
		typeItemsArray.forEach(item =>
			item.style.display = 'none'
		)
		const filteredByType = typeItemsArray.filter(element => +(element.dataset.dishType) == a);
		// console.log(filteredByType);
		filteredByType.forEach(item =>
			item.style.display = 'flex'
		)
		if (priceSelect && isInitialCall) {
			filteredByPrice(priceSelect, filteredByType);
		}
	}
	else {
		typeItemsArray.forEach(item =>
			item.style.display = 'flex'
		)
		if (priceSelect && isInitialCall) {
			filteredByPrice(priceSelect);
		}
	};
};
const priceSelect = document.querySelector('#price-select');
priceSelect.addEventListener('change', (e) => {
	e.preventDefault();
	// console.log(e.target.value);
	filteredByPrice(e.target.value, null, true);
})
const categorySelect = document.querySelector('#category-select');
categorySelect.addEventListener('change', (e) => {
	e.preventDefault();
	// console.log(e.target.value);
	filteredByType(e.target.value, null, true);
})
// console.log(inputElements);
// console.log(inputElementsArray);

// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.querySelector('.btn-check');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}
function validateForm() {
	const x = document.forms["modalForm"]["user-name"].value;
	const y = document.forms["modalForm"]["user-email"].value;
	if (x == "") {
		alert("Поля должны быть заполнены");
		return false;
	}
	if (y == "") {
		alert("Поля должны быть заполнены");
		return false;
	} else {
		completeForm();
	}

}
function completeForm() {
	alert("Спасибо за покупки");
	const quantityAndAmountOfGoods = document.querySelector('.top-cart-info__item');
	const quantityOfGoods = quantityAndAmountOfGoods.firstElementChild;
	const priceOfGoods = quantityAndAmountOfGoods.lastElementChild;
	quantityOfGoods.innerHTML = "";
	quantityOfGoods.innerHTML = "XXX";
	priceOfGoods.innerHTML = "";
	priceOfGoods.innerHTML = "XXX";
	modal.style.display = "none";
	inputElementsArray.forEach(item => {
		item.value = '';
	});
	document.getElementById("myForm").reset();
}
const btnSubmit = document.querySelector('.btn-submit');
btnSubmit.addEventListener('click', (e) => {
	e.preventDefault();
	validateForm();
})
