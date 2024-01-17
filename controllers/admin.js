const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {  
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false    
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

exports.getEditProduct = (req, res, next) => {  
  const editMode = req.query.edit;              // 쿼리 파라미터로 전달된 edit 값 추출
  if (!editMode) {
    return res.redirect("/");
  }  
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    if (!product) {
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product
    });
  });
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