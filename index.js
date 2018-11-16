'use strict';

// Init environment variables
require('dotenv').config({path: 'app/config/.env'})

// Load routes

require('./app/api/clients/routes/clientsRoutes');
require('./app/api/policies/routes/policiesRoutes');

// Load app config

const server = require('./app/config/server');

server.listen(process.env.PORT, () => console.log('Server up: %s', process.env.PORT));