"use strict";

const fs = require('fs').promises; // 동작이 끝남과 동시에 상태를 알려줌. 비동기처리에 효과적

class UserStorage{
    
    static #getUserInfo(data, id){
        const users = JSON.parse(data);
            const idx = users.id.indexOf(id); // 전달받은 id를 idx
            const usersKeys = Object.keys(users); // [id, psword, name]
            const userInfo = usersKeys.reduce((newUser, info)=>{
            newUser[info] = users[info][idx]; // 전달받은 idx 값에 있는 id, psword, name을 넣음
            return newUser
        }, {});
        return userInfo;
    }


    static getUsers(...fields){ // 메소드로 전달, ...변수명 : 배열로 받음
        //const users = this.#users; // #은 private 처리(은닉화)
        const newUsers = fields.reduce((newUsers, field) =>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {})
        return newUsers;
    }
    static getUserInfo(id){
        return fs
        .readFile("./src/databases/users.json")
        .then((data) => {
            
        return this.#getUserInfo(data, id);
    })
      .catch(console.error);
}

   


    static save(userInfo){
        //const users = this.#users;
        users.id.push(userInfo.id)
        users.name.push(userInfo.name)
        users.psword.push(userInfo.psword)
        
    }
}

module.exports = UserStorage;