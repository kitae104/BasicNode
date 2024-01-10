const express = require("express");
const router = express.Router();
const path = require("path");

// 컨트롤러 추가
const productsController = require("../controllers/products");

// get을 사용하면 use보다 더 정확하게 경로를 지정할 수 있다.
// get을 사용하면 순서가 중요하지 않아진다.
router.get("/add-product", productsController.getAddProduct);

router.post("/add-product", productsController.postAddProduct);

module.exports = router;