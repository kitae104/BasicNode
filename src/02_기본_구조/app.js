// 모듈 추가 
const http = require('http');
const routes = require('./routes');

console.log(routes.someText);

// 서버 생성
const server = http.createServer(routes.handler);

// 서버 실행
server.listen(3000);