"use strict";

const hello =(req, res)=>{
     res.render("home/index")
};

const login = (req, res)=>
{
    res.render("home/login")   
};

module.exports = {
    hello, // hello : hello와 같이 저장됨
    login
}; // 두 객체를 넘겨줌(index.js로)