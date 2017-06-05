import {WSCartServer} from './WSCartServer';
import {CartControl} from '../node-js/cartControl';
import {CartServer} from '../node-js/CartServer';
const wsPath = 'ws://localhost:9990';
document.addEventListener("DOMContentLoaded", function () {
  const commandInput: HTMLInputElement = <HTMLInputElement> document.getElementById("websocket-command");
  const sendButton: HTMLElement = document.getElementById("send-ws");


  const connectToWS = () => {
	const cartServer: CartServer = new WSCartServer(wsPath);
	const cartControl = new CartControl(cartServer);

	cartServer.connect(function () {
	  console.log('Connection opened...');
	  sendButton.removeAttribute('disabled');
	  sendButton.onclick = () => {
		let command = commandInput.value;
		console.log(`Sending command ${command}`);
		cartControl.execute(command);
		commandInput.value = '';
	  };

	});
	registerKeyEvents(createKeyMap(cartControl));
  };

  connectToWS();
});

function createKeyMap(cartControl) {
  let mapConfig = {
	'w': {
	  keydown: cartControl.forward,
	  keyup: cartControl.stop
	},
	's': {
	  keydown: cartControl.backward,
	  keyup: cartControl.stop
	},
	'a': {
	  keydown: cartControl.left,
	  keyup: cartControl.straight
	},
	'd': {
	  keydown: cartControl.right,
	  keyup: cartControl.straight
	}
  };

  Object.keys(mapConfig).forEach((key) => {
	mapConfig[key].keydown = mapConfig[key].keydown.bind(cartControl);
	mapConfig[key].keyup = mapConfig[key].keyup.bind(cartControl);
  });

  return mapConfig;

}
function registerKeyEvents(keyMap) {
  let firingMap: any = {};
  let keyDownFunc = createListenerEvent(keyMap, 'keydown');
  let keyUpFunc = createListenerEvent(keyMap, 'keyup');
  window.onkeydown = (event) => {
	if (!firingMap[event.key]) {
	  firingMap[event.key] = true;
	  keyDownFunc(event);
	}
  };
  window.onkeyup = (event) => {
	firingMap[event.key] = false;
	keyUpFunc(event);
  }
}

function createListenerEvent(keyMap, eventType) {
  return (event) => {
    console.log(`Firing command ${eventType} with key ${event.key}`);
	let command = keyMap[event.key];
	if (command) {
	  command[eventType]();
	}
  }
}