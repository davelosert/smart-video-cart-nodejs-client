'use strict';
/**
 * User: davidlosert
 * Date: 03.10.16
 * Time: 21:55
 */

const HOST = '192.168.178.40'; // Server
const PORT = 21567;

var net = require('net');

class CartServer {
    constructor(host, port){
        this._client = new net.Socket();
        this._client.on('error', function (error) {
            console.error(`Error occured!`);
            console.error(error);
        });
    }
    connect(cb){
        this._client.connect(PORT, HOST, function () {
            console.log('CONNECTED!');
            cb();
        });
    }

    write(data) {
        this._client.write()
    }
}

module.exports = CartServer;