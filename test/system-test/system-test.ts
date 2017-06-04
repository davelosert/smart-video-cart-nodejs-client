import {expect} from 'chai';

import {CartServer} from '../../src/cartServer';
import {CartControl} from '../../src/cartControl';
/**
 * This test will actually open a connection to the Cart and execute the tests directly.
 * Only works with a working cart and correct data.
 */
const CONFIG = {
  PORT: 9000,
  HOST: ''
};

describe('system-test', () => {
  let cartServer;
  let cartControl;
  before((done) => {
	cartServer = new CartServer(CONFIG.HOST, CONFIG.PORT);
	cartControl = new CartControl(cartServer);
	cartServer.connect(done);
  });

  it('works?', () => {
  });

  after((done) => {
	cartServer.disconnect(done);
  })
});