"use strict";

const roles = require('../../models/roles');
const constants = require('../../utils/constants');

const validateUser = (req, res, next)=>{
    const userRole = req.user.role;
    if(userRole === roles.admin || userRole === roles.users){
        return next();
    }
    return res.status(403).send(constants.api.errors.ACCESS_DENIED);
}
module.exports = validateUser;