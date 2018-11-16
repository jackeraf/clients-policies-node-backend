"use strict";

const roles = require('./roles');
const hash = require('../utils/hash');
const utils = require('../utils/utils');

class User{
    constructor(id, name, email, password, role){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = hash(password);
        this.role = role;
    }
}

const Oriol = new User(utils.generateId(), "Oriol", "oriol@gmail.com", "1234", roles.admin);
const Jordi = new User(utils.generateId(), "Jordi", "jordi@gmail.com", "5678", roles.users);

module.exports = {
    Oriol,
    Jordi
};