function shopProduct(title, price) {
	this.title = title;
	this.price = price;
}
shopProduct.prototype.getTitle = function () {
	console.log(this.title);
}
shopProduct.prototype.setTitle = function (title) {
	this.title = title;
}
shopProduct.prototype.setPrice = function (price) {
	this.price = price;
}
shopProduct.prototype.getPrice = function () {
	console.log(this.price);
}
shopProduct.prototype.getInfo = function () {
	if (this.numPages) {
		console.log('Product: ' + this.title + ' Price: ' + this.price + ' Pages: ' + this.numPages)
	}
	if (this.playLenght) {
		console.log('Product: ' + this.title + ' Price: ' + this.price + ' PlayLenght: ' + this.playLenght)
	}


}


export default shopProduct;