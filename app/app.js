"use strict";

// 모듈
const express = require("express")
const app = express()
const bodyParser = require("body-parser")

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views") // views 폴더로 그냥 지정해줌
app.set("view engine", "ejs") // ejs == html과 같다고 생각

app.use(express.static(`${__dirname}/src/public`)); // 현재 디렉터리(app)/src/public을 정적경로로 추가
 // use -> 미들 웨어를 등록해주는 메서드. index에서 module과 연결
                    
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결


app.use("/", home); // index.js에 있는 home/index 실행됨

module.exports = app; // www.js에 app.js를 던져줌



// nodemon ./bin/www.js은 서버를 껏다 켯다 안해도됨
// 저장을 하면 그냥 바로 서버가 켜짐