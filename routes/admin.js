const express = require('express');

const router = express.Router();

// get을 사용하면 use보다 더 정확하게 경로를 지정할 수 있다.
// get을 사용하면 순서가 중요하지 않아진다. 
router.get('/add-product', (req, res, next) => {
  res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">추가</button></form');
});

router.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;