"use strict";

const id = document.querySelector("#id"); // #을 넣으면 <input id="id" type="text" placegoler="아이디">를 다 가져옴
const psword = document.querySelector("#psword");
const loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        psword: psword.value,
    }; // 아이디창, 비밀번호창에 입력한 값이 저장됨


    fetch("/login", {
        method: "POST",
        headers:{
            "Content-Type" : "application/json" // json을 이용한다는 것을 명시
        },
        body: JSON.stringify(req), // 문자열로 바꿔줌
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/";
         } else{
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error("login err") // "전에 new error 하면 오류코드도.
        })
    }