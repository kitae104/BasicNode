const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {  
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    activeAddProduct: true,
    formsCSS: true,
    productCSS: true
  });
}

exports.postAddProduct = (req, res, next) => {  
  const product = new Product(req.body.title);  // Product 모델의 객체 생성
  product.save();                               // Product 모델의 save() 메소드 호출
  res.redirect("/");
}

exports.getProducts = (req, res, next) => {
  
  Product.fetchAll(products => {          // Product 모델의 fetchAll() 메소드 호출
    res.render("shop", {
      prods: products,
      pageTitle: "Kitae's Shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  });
};