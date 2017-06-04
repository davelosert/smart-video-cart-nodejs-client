'use strict';
/**
 * User: davidlosert
 * Date: 03.10.16
 * Time: 21:55
 */

var net = require('net');

class CartServer {
    constructor(host, port){
        this._client = new net.Socket();
        this._client.on('error', function (error) {
            console.error(`Error occured!`);
            console.error(error);
        });

        this.host = host;
        this.port = port;
    }
    connect(cb){
        this._client.connect(this.port, this.host, function () {
            console.log('CONNECTED!');
            cb();
        });
    }

    exectue(command) {
        this._client.write(command);
    }
}

module.exports = CartServer;