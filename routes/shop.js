const path = require("path");
const express = require("express");

// 컨트롤러 추가
const shopController = require("../controllers/shop");

const router = express.Router();

router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);  // :productId는 변수로 동적 라우팅 처리

// router.get('/products/delete', shopController.getDeleteProduct);

router.get("/cart", shopController.getCart);

router.get("/orders", shopController.getOrders);

router.get("/checkout", shopController.getCheckout);

module.exports = router;
