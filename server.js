const express = require('express');
const server = express();
const port = 3000;

const version = require('./routes/version');

server.get('/', (req, res) => res.send('hello'));
server.use('/version', version);

server.listen(port);