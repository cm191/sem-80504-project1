const express = require('express');
const server = express();
const port = 3000;

const routes = require('./routes');

server.use('/', routes);

server.listen(port);
