'use strict';
/**
 * User: davidlosert
 * Date: 03.10.16
 * Time: 20:33
 */



var stdin = process.stdin;

stdin.setRawMode( true );

stdin.resume();

stdin.setEncoding( 'utf8' );


module.exports = {

}
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

