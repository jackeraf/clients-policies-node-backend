"use strict";

const server = require('../../../config/server');
const PolicyController = require('../controllers/policyController');
const policiesMiddleware = require('../../middlewares/policiesMiddleware');
const auth = require('../../middlewares/auth');

server.get('/policies/:clientname',[auth,policiesMiddleware], PolicyController.getPolicies);
server.get('/policy/:number',[auth,policiesMiddleware], PolicyController.getUserFromPolicy)
