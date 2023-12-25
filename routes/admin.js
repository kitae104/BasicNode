const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path");

const products = [];

// get을 사용하면 use보다 더 정확하게 경로를 지정할 수 있다.
// get을 사용하면 순서가 중요하지 않아진다.
router.get("/add-product", (req, res, next) => {
  //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    activeAddProduct: true,
    formsCSS: true,
    productCSS: true
  });
});

router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title }); // {타이틀 : 사용자가 입력한 값}
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
