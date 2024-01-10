const express = require("express");
const path = require("path");

// 컨트롤러 추가
const productsController = require("../controllers/products");

const router = express.Router();

router.get("/", productsController.getProducts);

module.exports = router;
