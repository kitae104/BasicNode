const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;          // 요청 url
  const method = req.method;    // 요청 메소드

  // 루트 페이지
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  
  // 메시지 페이지
  if (url === '/message' && method === 'POST') {
    const body = [];
  
    // 데이터 전송
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    // 데이터 수신 완료
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];           // message=메시지
      // 비동기 처리 방식
      fs.writeFile('message.txt', message, (err) => {
        res.statusCode = 302;             // 리다이렉션
        res.setHeader('Location', '/');   // 리다이렉션 주소
        return res.end();                 // 응답 종료  
      });           // 파일 생성
    });
  }
  
  // 루트 페이지 이외의 페이지
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
};

// 모듈 내보내기1
// module.exports = {
//   handler :requestHandler,
//   someText: 'Some hard coded text'
// };      

// 모듈 내보내기2
// module.exports.handler = requestHandler;
// module.exports.someText = 'Some hard coded text';

// 모듈 내보내기3
exports.handler = requestHandler;
exports.someText = 'Some hard coded text';