import shopProduct from './ShopProduct.js';
function bookProduct(title, numPages, price) {
	this.numPages = numPages;
	shopProduct.call(this, title, price);
}
bookProduct.prototype = Object.create(shopProduct.prototype);
bookProduct.prototype.constructor = shopProduct.prototype;
bookProduct.prototype.getNumPages = function () {
	console.log('Number of pages: ' + this.numPages);
}
export default bookProduct;