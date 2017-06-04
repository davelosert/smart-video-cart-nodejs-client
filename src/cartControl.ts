'use strict';
import {CartServer} from './cartServer';
/**
 * User: davidlosert
 * Date: 03.10.16
 * Time: 20:49
 */


const BASIC_COMMANDS = {
	FORWARD: 'forward',
	BACKWARD: 'backward',
	LEFT: 'left',
	RIGHT: 'right',
	STOP: 'stop',
	DISTANCE: 'distance',
	X_UP: 'x+',
	X_DOWN: 'x-',
	Y_UP: 'y+',
	Y_DOWN: 'y-',
	CAMERA_HOME: 'xy_home'
};

export class CartControl {
	constructor(private cartServer: CartServer) {
	}

	forward() {
		this.execute(BASIC_COMMANDS.FORWARD);
	}

	backward() {
		this.execute(BASIC_COMMANDS.BACKWARD);
	}

	stop() {
		this.execute(BASIC_COMMANDS.STOP)
	}

	left() {
		this.execute(BASIC_COMMANDS.LEFT)
	}

	right() {
		this.execute(BASIC_COMMANDS.RIGHT);
	}

	turn(angle) {
		this.execute(`turn=${angle}`)
	}

	speed(speed) {
		this.execute(`speed${speed}`)
	}

	cameraUp() {
		this.execute(BASIC_COMMANDS.X_UP);
	}

	execute(command) {
		this.cartServer.execute(command);
	}
}

