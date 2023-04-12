"use strict";

const output = {
    hello:(req, res)=>{
        res.render("home/index")
   },
   
   login: (req, res)=>
   {
       res.render("home/login")   
   },
}

const process = {
    login: (req, res) => {
        console.log(req.body);
    }
}


module.exports = {
     // hello : hello와 같이 저장됨
    output,
    process,
}; // 두 객체를 넘겨줌(index.js로)