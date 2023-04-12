"use strict";

// 모듈
const express = require("express")
const app = express()


// 라우팅
const home = require("./routes/home");

// 앱 세팅
app.set("views", "./views") // views 폴더로 그냥 지정해줌
app.set("view engine", "ejs") // ejs == html과 같다고 생각

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드. index에서 module과 연결
                    // index.js에 있는 home/index 실행됨

module.exports = app; // www.js에 app을 던져줌