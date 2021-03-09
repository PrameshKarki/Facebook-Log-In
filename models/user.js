//file system module
const fs=require('fs');
//Path module
const path=require('path');
//Root path
const rootPath=require('../utils/root');

let users = [];
module.exports = class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    save() {
        fs.appendFile(path.join(rootPath,'..','data','users.json'),JSON.stringify(this),(error,data)=>{ })
        users.push(this);
    }
}