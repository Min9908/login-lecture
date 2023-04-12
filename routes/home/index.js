"use strict";

const express = require("express");
const router = express.Router(); // 클라이언트 요청을 연결해줌

const ctrl = require("./home.ctrl");

router.get("/", ctrl.hello)
router.get("/login", ctrl.login)

module.exports = router; // 웹으로 내보내기 해주는 명령어