const server = require('http').createServer();
const router = require('./config/router');
const PORT = '3001';

server.on('request', router);

server.listen(PORT);
