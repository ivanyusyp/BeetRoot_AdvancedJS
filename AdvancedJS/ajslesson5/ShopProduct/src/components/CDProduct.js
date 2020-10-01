import shopProduct from './ShopProduct.js';
function cdProduct(title, playLenght, price) {
	this.playLenght = playLenght;
	shopProduct.call(this, title, price);
}
cdProduct.prototype = Object.create(shopProduct.prototype);
cdProduct.prototype.constructor = shopProduct;
cdProduct.prototype.getPlayLenght = function () {
	console.log('Play lenght: ' + this.playLenght);
}
export default cdProduct;