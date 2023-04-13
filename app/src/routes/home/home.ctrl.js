"use strict";

const User = require("../../models/User");
 
const output = {
    hello:(req, res)=>{
        res.render("home/index")
   },
   
   login: (req, res)=>
   {
       res.render("home/login")   
   },
   register: (req, res)=>{
    res.render("home/register");
   }
}



const process = {
    login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    return res.json(response);
  },
    register: (req, res) =>{
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);
    } 
 }


module.exports = {
    output,
    process,
}; // 두 객체를 넘겨줌(index.js에서 사용할 수 있도록)