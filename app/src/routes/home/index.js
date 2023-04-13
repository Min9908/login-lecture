"use strict";

const express = require("express");
const router = express.Router(); // 클라이언트 요청을 연결해줌

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.hello);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.post("/login", ctrl.process.login); // 데이터를 받아서 로그인 기록을 처리

module.exports = router; // 웹으로 내보내기 해주는 명령어