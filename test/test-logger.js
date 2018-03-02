//-----------------------------------------------------------------------
// <copyright file = "test-message-processor.js">
// Copyright (c) 2018 Me!. All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

'use strict';

const chai = require('chai');
const expect = chai.expect;

describe('logger tests', () => {
    const logger = require('../logger');
    
    it('should be an object', (done) => {
        expect(logger).to.be.an('object');
        done();
    });

    it('should have one transport', (done) => {
        // note that this test will have to be updated if we add more transports
        expect(Object.keys(logger.transports).length).to.equal(1);
        done();
    });

    describe('log-file transport tests', () => {
        it('should have a transport named log-file', (done) => {
            expect(Object.keys(logger.transports)).to.contain('log-file');
            done();
        });

        it('should have the correct properties', (done) => {
            expect(logger.transports['log-file'].name).to.equal('log-file');
            expect(logger.transports['log-file'].level).to.equal('silly');
            expect(logger.transports['log-file'].filename).to.equal('odin-bot.log');
            expect(logger.transports['log-file'].maxsize).to.equal(2000000);
            expect(logger.transports['log-file'].maxFiles).to.equal(5);
            done();
        });
    });
});
