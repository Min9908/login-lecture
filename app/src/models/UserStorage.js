"use strict";

const db = require("../config/db");

class UserStorage{
    
    static getUserInfo(id){
        return new Promise((resolve, reject) =>{
            const query = "SELECT * FROM users WHERE id = ?;"
            db.query(query,[id],(err, data)=>{
            if(err) reject(err); // 에러가나면 reject
            console.log(data[0]);
            resolve(data[0]); //안나면 resolve
        });
    });
}

   


    static async save(userInfo){
        return new Promise((resolve, reject) =>{
            const query = "INSERT INTO users(id, name, psword) VALUES(?,?,?);";
            db.query(query,
                [userInfo.id,userInfo.name,userInfo.psword]
                ,(err)=>{
            if(err) reject(`${err}`); // 에러가나면 reject
            resolve({ success : true });
        })
    })
}
}

module.exports = UserStorage;