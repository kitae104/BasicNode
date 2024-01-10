const products = [];

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
  products.push({ title: req.body.title }); // {타이틀 : 사용자가 입력한 값}
  res.redirect("/");
}

exports.getProducts = (req, res, next) => {
  res.render("shop", {
    prods: products,
    pageTitle: "Kitae's Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
}