import {expect} from 'chai';

import {TCPCartServer} from '../../src/node-js/TCPCartServer';
import {CartControl} from '../../src/node-js/cartControl';
/**
 * This test will actually open a connection to the Cart and execute the tests directly.
 * Only works with a working cart and correct data.
 */
const CONFIG = {
  PORT: 21567,
  HOST: '192.168.178.40'
};

describe('system-test', function () {
  this.timeout(10000);
  let cartServer: TCPCartServer;
  let cartControl: CartControl;
  before((done) => {
	cartServer = new TCPCartServer(CONFIG.HOST, CONFIG.PORT);
	cartControl = new CartControl(cartServer);
	cartServer.connect(done);
  });

  it('turns more than 90°', () => {
	// max right = 460
	// middle position ~ 150
	// max left = -160
	cartControl.execute("turn=150")
  });
  it.skip('drives forward and stops', (done) => {
	cartControl.forward();
    setTimeout(() => {
       cartControl.stop();
       done();
    }, 1000)
  });

  after((done) => {
	cartServer.disconnect(done);
  })
});