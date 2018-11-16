"use strict";

const server = require('../../../config/server');
const ClientController = require('../controllers/clientsController');
const clientsMiddleware = require('../../middlewares/clientsMiddleware');
const auth = require('../../middlewares/auth');

server.post('/login/',ClientController.generateToken)

server.get('/client/id/:id',[auth, clientsMiddleware], ClientController.getUserById)
server.get('/client/name/:name',[auth, clientsMiddleware],ClientController.getClientByName)
