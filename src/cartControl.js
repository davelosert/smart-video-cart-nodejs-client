'use strict';
/**
 * User: davidlosert
 * Date: 03.10.16
 * Time: 20:49
 */

const controlCommands = ['forward', 'backward', 'left', 'right', 'stop', 'distance', 'x+', 'x-', 'y+', 'y-', 'xy_home'];
class CartControl {
    constructor(cartServer) {
        this._cartTCPConnection = cartServer;
    }

    forward() {
        this._cartTCPConnection.write('forward');
    }

    backward() {
        this._cartTCPConnection.write('backward');
    }

    stop() {
        this._cartTCPConnection.write('stop');
    }

    left() {
        this._cartTCPConnection.write('left');
    }

    right() {
        this._cartTCPConnection.write('right');
    }

    turn(angle) {
        this._cartTCPConnection.write(`turn=${angle}`)
    }

    speed(speed) {
        this._cartTCPConnection.write(`speed${speed}`)
    }

    cameraUp() {
        this._cartTCPConnection.write()
    }
}

module.exports = CartControl;