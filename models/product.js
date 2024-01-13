const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = (callback) => {  
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      callback([]);
    } else {
      callback(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  // 생성자
  constructor(t) {
    this.title = t;
  }

  // 메소드
  save() {    
    getProductsFromFile(products => {
      products.push(this);  // this는 현재 Product 객체
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });      
    })
  }

  // static 메소드 - 객체를 생성하지 않고도 호출 가능
  static fetchAll(callback) {
    getProductsFromFile(callback);    
  }
};
