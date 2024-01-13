const path = require("path");
const express = require("express");
const adminController = require("../controllers/admin");
const router = express.Router();

// 컨트롤러 추가

// get을 사용하면 use보다 더 정확하게 경로를 지정할 수 있다.
// get을 사용하면 순서가 중요하지 않아진다.
router.get("/add-product", adminController.getAddProduct);

router.get("/products", adminController.getProducts);

router.post("/add-product", adminController.postAddProduct);

module.exports = router;
