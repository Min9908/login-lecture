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

const users = {
    id: ["jaya","hyuk","min"],
    psword: ["1234","1234","1234"]
}

const process = {
    login: (req, res) => {
        console.log(req.body);
        const id = req.body.id,
            psword = req.body.psword

            if(users.id.includes(id)){
                const idx = users.id.indexOf(id);
                if(users.psword[idx] == psword){
                    return res.json({
                        success: true,
                    })
                }
            }
            return res.json({
                success: false,
                msg: "login fail"
            })
    }
}


module.exports = {
    output,
    process,
}; // 두 객체를 넘겨줌(index.js에서 사용할 수 있도록)