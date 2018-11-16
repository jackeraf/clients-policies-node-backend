"use strict";

const express = require('express');
const server = express();
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const morganOutputColor = require('./morganColor');


//CORS middleware
const allowCrossDomain = (req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}
server.use(allowCrossDomain);
server.use(helmet());
server.use(morgan(morganOutputColor));

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

module.exports = server;
