const http = require('http');
const apps = require('./app')


apps.set('port', process.env.PORT || 3000);
const server = http.createServer(apps);

server.listen(process.env.PORT || 3000);