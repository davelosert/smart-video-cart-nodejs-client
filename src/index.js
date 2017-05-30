'use strict';
var readline = require('readline');


const OPT_GARY = {
    HOST: 'gary',
    PORT: 21567
};

const OPT_SEPP = {
    HOST: 'sepp',
    PORT: 21567
};

const CartServer = require('./cartServer');
const CartControl = require('./cartControl');

var garyServer = new CartServer(OPT_GARY.HOST, OPT_GARY.PORT);
var seppServer = new CartServer(OPT_SEPP.HOST, OPT_SEPP.PORT);
seppServer.connect(function () {
    var sepp = new CartControl(seppServer);

    sepp.forward();
})


var stdin = process.stdin;

// without this, we would only get streams once enter is pressed
stdin.setRawMode( true );

// resume stdin in the parent process (node app won't quit all by itself
// unless an error or process.exit() happens)
stdin.resume();

// i don't want binary, do you?
stdin.setEncoding( 'utf8' );

// on any data into stdin
stdin.on( 'data', function( key ){
    // ctrl-c ( end of text )
    if ( key === '\u0003' ) {
        process.exit();
    }


    if(key === 'w') {
        console.log('Run Motor!');
        client.write('forward');

    }

    if(key === 's') {
        console.log('Stop Motor!');
        client.write('backward');
    }
});