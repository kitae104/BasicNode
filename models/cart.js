const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json' 
);

module.exports = class Cart {
  static addProduct(id, productPrice) {
    // Fetch the previous cart
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }
      // 카트에 이미 동일한 상품이 있는지 확인
      const existingProductIndex = cart.products.findIndex(prod => prod.id === id);  // 상품 아이디에 대한 index 반환
      const existingProduct = cart.products[existingProductIndex];                   // 인덱스에 해당하는 상품 반환 
      let updatedProduct;
      
      // Add new product/ increase quantity
      if (existingProduct) {
        updatedProduct = {...existingProduct};                    // 기존 상품 복사   
        updatedProduct.qty = updatedProduct.qty + 1;              // 수량 증가
        cart.products = [...cart.products];                       // 기존 상품 복사
        cart.products[existingProductIndex] = updatedProduct;     // 기존 상품 위치에  대체
      } else {
        updatedProduct = {id: id, qty: 1};                        // 새로운 상품 추가
        cart.products = [...cart.products, updatedProduct];       // 기존 상품에 새로운 상품 추가
      }
      cart.totalPrice = cart.totalPrice + +productPrice;          // 총 가격 증가
      fs.writeFile(p, JSON.stringify(cart), err => {
        console.log(err);
      }); 
    });  
  }
}