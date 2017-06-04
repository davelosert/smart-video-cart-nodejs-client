'use strict';
/**
 * User: davidlosert
 * Date: 03.10.16
 * Time: 21:55
 */

var net = require('net');

export class CartServer {
  private _client: any;

  constructor(private host, private port) {
	this._client = new net.Socket();
	this._client.on('error', function (error) {
	  console.error(`Error occured!`);
	  console.error(error);
	});
  }

  connect(cb) {
	this._client.connect(this.port, this.host, function () {
	  console.log('CONNECTED!');
	  cb();
	});
  }

  execute(command) {
	this._client.write(command);
  }
}

