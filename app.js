// 모듈 추가 
const express = require('express');
const bodyParser = require('body-parser');
const app = express();      // express 객체 생성
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// 미들웨어 등록
app.use(bodyParser.urlencoded({extended: false})); // body-parser 미들웨어 등록

// 미들웨어 등록
app.use('/admin', adminRoutes);   // 순서는 상관없음
app.use(shopRoutes);

// 오류 페이지 처리 미들웨어 등록
app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

// 서버 실행
app.listen(3000);

