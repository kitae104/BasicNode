// 모듈 추가 
const express = require('express');

const app = express();      // express 객체 생성

app.use((req, res, next) => {
    console.log('첫 번째 미들웨어 실행!');
    next();  // 다음 미들웨어로 넘어가도록 next() 호출
});

app.use((req, res, next) => {
    console.log('두 번째 미들웨어 실행!');
    res.send('<h1>express 서버에서 응답한 결과입니다.</h1>');
});

// 서버 실행
app.listen(3000);