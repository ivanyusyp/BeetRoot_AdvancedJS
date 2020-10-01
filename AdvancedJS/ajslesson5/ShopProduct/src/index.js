import shopProduct from './components/ShopProduct.js';
import bookProduct from './components/BookProduct.js';
import cdProduct from './components/CDProduct.js';

const ShopProduct = new shopProduct();
const b1 = new bookProduct('dsada', 248, 45);
const cd1 = new cdProduct('wqxwqswqs', 4.15, 415);

b1.getInfo();
cd1.getInfo();
cd1.getPlayLenght();
b1.getNumPages();