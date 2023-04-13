"use strict";

const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body = body;
    }

    async login(){ // async는 비동기함수
        const client = this.body
            try{
            const user = await UserStorage.getUserInfo(client.id);
            
            if(user) {
                if(user.id === client.id && user.psword === client.psword){
                    return { success : true }
                }
                return { success : false, msg : "비밀번호 틀림"};
            }
            return { success : false, msg : "존재하지 않는 아이디"};
        } catch(err){
            return { success: false, msg: err};
        }
    }
    async register(){
        const client = this.body
        try{
        const response = await UserStorage.save(client)
        return response;
        } catch(err){
            const a = { success: false, msg: err};
            console.log(typeof a.msg);
            return a;
        }
    }
}

module.exports = User;