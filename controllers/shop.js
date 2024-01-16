const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  
  Product.fetchAll(products => {          // Product 모델의 fetchAll() 메소드 호출
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All Products",
      path: "/products"      
    });
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;   // 동적 라우팅으로 전달된 productId 값 추출
  Product.findById(prodId, product => {   // Product 모델의 findById() 메소드 호출
    res.render("shop/product-detail", {
      product: product,
      pageTitle: product.title,
      path: "/products"
    });    
  });  
  //res.redirect('/');
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {          // Product 모델의 fetchAll() 메소드 호출
    res.render("shop/index", {
      prods: products,
      pageTitle: "Kitae's Shop",
      path: "/"
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    pageTitle: "Your Cart",
    path: "/cart",
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;   // 동적 라우팅으로 전달된 productId 값 추출
  console.log(prodId);
  res.redirect('/cart');
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    pageTitle: "Your Orders",
    path: "/orders",
  });
};

exports.getCheckout = (req, res, next) => { 
  res.render("shop/checkout", {
    pageTitle: "Checkout",
    path: "/checkout",
  });
};