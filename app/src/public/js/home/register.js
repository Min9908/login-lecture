"use strict";

const id = document.querySelector("#id"); // #을 넣으면 <input id="id" type="text" placegoler="아이디">를 다 가져옴
const name = document.querySelector("#name");
const confirmPsword = document.querySelector("#confirm-psword");
const psword = document.querySelector("#psword");
const registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
    if(!id.value) return alert("아이디를 입력해주세요.")
    if(psword.value !== confirmPsword.value) return alert("비밀번호가 일치하지 않습니다.")
    
    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
    }; // 아이디창, 비밀번호창에 입력한 값이 저장됨


    fetch("/register", {
        method: "POST",
        headers:{
            "Content-Type" : "application/json" // json을 이용한다는 것을 명시
        },
        body: JSON.stringify(req), // 문자열로 바꿔줌
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/login";
         } else{
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error("register err") // "전에 new error 하면 오류코드도.
        })
    }