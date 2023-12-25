const express = require("express");
const path = require("path");
const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("shop.js", adminData.products); // admin.js의 products 배열을 가져온다.
  const products = adminData.products;
  // __dirname 은 현재 파일이 있는 경로
  //res.sendFile(path.join(rootDir, 'views', 'shop.html'));  // views/shop.html 파일을 보낸다.

  // views/shop.pug 파일을 렌더링 + 데이터 전달
  res.render("shop", {
    prods: products,
    pageTitle: "Kitae's Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
});

module.exports = router;
