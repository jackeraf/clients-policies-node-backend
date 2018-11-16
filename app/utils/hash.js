"use strict"; 

const bcrypt = require('bcrypt');

function hash(password){
    return bcrypt.genSalt(10)
    .then(salt=>{
        return bcrypt.hash(password, salt)
    })
    .then(hashed=>{
        return hashed;
    })
}

module.exports = hash;