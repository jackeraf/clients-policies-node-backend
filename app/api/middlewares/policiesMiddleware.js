"use strict";

const roles = require('../../models/roles');
const constants = require('../../utils/constants');

const validateUser = (req, res, next)=>{
    if(req.user.role !== roles.admin) return res.status(403).send(constants.api.errors.ACCESS_DENIED);
    return next();
}
module.exports = validateUser;