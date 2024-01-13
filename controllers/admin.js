const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {  
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    activeAddProduct: true,
    formsCSS: true,
    productCSS: true
  });
}

exports.postAddProduct = (req, res, next) => {  
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, price, description);  // Product 모델의 객체 생성
  product.save();                               // Product 모델의 save() 메소드 호출
  res.redirect("/");
}

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {          // Product 모델의 fetchAll() 메소드 호출
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin Products",
      path: "/admin/products"
    });
  });
}