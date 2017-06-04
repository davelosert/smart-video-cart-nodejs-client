'use strict';
import * as net from 'net';
import {TCPCartServer} from './CartServer';
/**
 * User: davidlosert
 * Date: 03.10.16
 * Time: 21:55
 */


export class TCPCartServer implements TCPCartServer {
  private _client: net.Socket;

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

  disconnect(cb) {
  	this._client.end(cb);
  }

  execute(command) {
	this._client.write(command);
  }
}
