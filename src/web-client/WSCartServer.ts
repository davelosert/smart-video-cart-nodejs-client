import {CartServer} from '../node-js/CartServer';
export class WSCartServer implements CartServer {
  private connection: WebSocket;

  constructor(private wspath) {

  }

  connect(callback?: Function) {
	this.connection = new WebSocket(this.wspath);
	this.connection.onopen = () => {
	  this.listenOnErrors();
	  callback();
	};

  }

  disconnect(callback?: Function) {
	this.connection.close();
  }

  execute(command: string) {
	this.connection.send(command);
  }

  listenOnErrors() {
	this.connection.onerror = (err) => {
	  console.error(`WS-Error: ${err}`);
	}
  }

}