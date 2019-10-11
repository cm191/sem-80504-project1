const express = require('express');
const server = express();
const port = 3000;

server.get('/', (req, res) => res.send('hello'));

server.listen(port, () => console.log('server running'));