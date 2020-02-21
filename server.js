const express = require('express');
const router =  require('./router/router');
const server = express();

server.use(express.json());

server.use('/api/recipe/', router);

module.exports = server;