// 모듈 추가
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express(); // express 객체 생성

app.set("view engine", "ejs"); // ejs 템플릿 엔진 사용
app.set("views", "views"); // views 폴더에 템플릿 파일을 넣는다.

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// 미들웨어 등록
app.use(bodyParser.urlencoded({ extended: false })); // body-parser 미들웨어 등록

// 정적 파일 서비스 미들웨어 등록
app.use(express.static(path.join(__dirname, "public"))); // 정적 파일 서비스 미들웨어 등록

// 미들웨어 등록
app.use("/admin", adminData.routes); // 순서는 상관없음
app.use(shopRoutes);

// 오류 페이지 처리 미들웨어 등록
app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found", path:'' }); // 상대경로
});

// 서버 실행
app.listen(3000);