// 모듈 추가
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

// 컨트롤러 추가
const errorController = require("./controllers/error");

const app = express(); // express 객체 생성

app.set("view engine", "ejs"); // ejs 템플릿 엔진 사용
app.set("views", "views"); // views 폴더에 템플릿 파일을 넣는다.

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// 미들웨어 등록
app.use(bodyParser.urlencoded({ extended: false })); // body-parser 미들웨어 등록

// 정적 파일 서비스 미들웨어 등록
app.use(express.static(path.join(__dirname, "public"))); // 정적 파일 서비스 미들웨어 등록

// 미들웨어 등록
app.use("/admin", adminRoutes); // 순서는 상관없음
app.use(shopRoutes);

// 오류 페이지 처리 미들웨어 등록
app.use(errorController.get404);

// 서버 실행
app.listen(3000);