'use strict';

const OPT_GARY = {
	HOST: 'gary',
	PORT: 21567
};

const CartServer = require('./cartServer');
const CartControl = require('./cartControl');

const cartServer = new CartServer(OPT_GARY.HOST, OPT_GARY.PORT);

cartServer.connect(function () {
	let cartControl = new CartControl(cartServer);
	let stdin = process.stdin;
// without this, we would only get streams once enter is pressed
	stdin['setRawMode'](true);
// resume stdin in the parent process (node app won't quit all by itself
// unless an error or process.exit() happens)
	stdin.resume();
// i don't want binary, do you?
	stdin.setEncoding('utf8');
// on any data into stdin
	stdin.on('data', function (key) {
		// ctrl-c ( end of text )
		if (key === '\u0003') {
			process.exit();
		}

		if (key === 'w') {
			console.log('Run Motor!');
			cartControl.forward();

		}

		if (key === 's') {
			console.log('Stop Motor!');
			cartControl.stop();
		}
	});
});


