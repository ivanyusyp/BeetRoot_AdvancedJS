/* Todo:
					Есть 3 логгера, которые выводят разные заголовки и текст сообщений
					Задача - реализовать такую же функциональность выполняемую одной функцией
			*/
function log(message) {
	log1();
	log2();
	log3();
}
const log1 = console.log("Message 1")
const log2 = console.log("Message 2");
const log3 = console.log("Message 3");