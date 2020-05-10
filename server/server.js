'use strict'
const app = require('../src/app')
const http = require('http');

const port = normalizePort(process.env.PORT || '3000')
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
console.log('Servidor executando na porta ' + port);

function normalizePort(val) {
    const port = parseInt(val, 10);

    if(isNaN(port)){
        return val;
    }
    if(port >= 0){
        return port;
    }
    return false;
}

function onError(err) {
    if(erros.syscall != 'listen'){
        throw err;
    }
    const bind = typeof port == 'string' ?
        'Pipe' + port :
        'Port' + port;

    switch(err.code){
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw err;
    }

}