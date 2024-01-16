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
  constructor(title, imageUrl, price, description) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  // 메소드
  save() {    
    this.id = Math.random().toString();   // 임의의 id 생성 - 추후에 변경 
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

  static findById(id, callback) {    
    getProductsFromFile(products => {
      const product = products.find(p => p.id === id);    // id가 일치하는 객체를 찾음
      callback(product);                                  // 찾은 객체를 callback으로 전달
    })
  }
};
