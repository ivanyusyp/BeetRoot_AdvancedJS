
// Есть кнопка. Надо установить, был ли уже клик по ней или нет.
// Как правило для этого создается объект, и в этом
// объекте можно фиксировать состояние кнопки  - например присваивать
// свойству объекта clicked = true
// Но в данном случае при обработке события this указывает не на объект а на button

// ЗАДАЧА - написать свою функцию bind которая бы меняла this при обработке события.
const obj = {
	clicked: false,
	click: function onClick() {
		this.clicked = true;
		console.log(obj.clicked);
		alert("Button is clicked");
		console.log(this);
	}
};
const clicks = obj.click;
const getClick = clicks.bind(obj);
const button = document.getElementById("btn");
button.addEventListener("click", getClick);