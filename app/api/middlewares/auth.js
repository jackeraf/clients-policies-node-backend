"use strict";

const jwt = require('jsonwebtoken');
const constants = require('../../utils/constants');

function auth(req, res, next) {
    const token = req.header('x-auth-token');
    if(!token) return res.status(401).send(constants.api.errors.NO_TOKEN);
    try{
        const decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY)
        req.user = decoded;
        return next();
    }
    catch(ex){
        return res.status(400).send(constants.api.errors.INVALID_TOKEN);
    }
};

module.exports = auth;
