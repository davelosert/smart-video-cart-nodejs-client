'use strict';
/**
 * User: davidlosert
 * Date: 03.10.16
 * Time: 20:38
 */
const expect = require('chai').expect;


describe('Keyboard Emulator', () => {
    it('should recognize key-down', (done) => {
        let stdinMock;

        setInterval(function () {
            stdinMock.sendKeyPress();

        }, 2000);

        let startTime;
        keylistener.on('keydown', () => {
            startTime = new Date().getTime();
        });

        keylistener.on('keyup', () => {
            let time = new Date().getTime() - startTime;
            expect(time).to.be.greaterThan(1999);
            done();
        });
        expect(true).to.equal(true);
    });
});