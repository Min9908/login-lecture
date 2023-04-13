"use strict";

class UserStorage{
    static #users = { // #은 private 처리(은닉화)
        id: ["jaya","hyuk","min"],
        psword: ["1234","1234","1234"],
        name: ["민이", "혁이", "김민"]
    }

    static getUsers(...fields){ // 메소드로 전달, ...변수명 : 배열로 받음
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) =>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {})
        return newUsers;
    }
    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id); // 전달받은 id를 idx
        const usersKeys = Object.keys(users); // [id, psword, name]
        const userInfo = usersKeys.reduce((newUser, info)=>{
            newUser[info] = users[info][idx]; // 전달받은 idx 값에 있는 id, psword, name을 넣음
            return newUser
        }, {});
        return userInfo;
}
}

module.exports = UserStorage;