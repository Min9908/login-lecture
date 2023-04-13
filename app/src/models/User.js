"use strict";

const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body = body;
    }

    async login(){ // async는 비동기함수
        const client = this.body
        const {id, psword } = await UserStorage.getUserInfo(client.id); // 반환할때까지 실행하지 말고 기다려
        
        if(id) {
            if(id === client.id && psword === client.psword){
                return { success : true }
            }
            return { success : false, msg : "비밀번호 틀림"};
        }
        return { success : false, msg : "존재하지 않는 아이디"};
    }
    register(){
        const client = this.body
        UserStorage.save(client)
    }
}

module.exports = User;