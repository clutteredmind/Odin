//-----------------------------------------------------------------------
// <copyright file = "test-message-types.js">
// Copyright (c) 2018 Me!. All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

'use strict';

const chai = require('chai');
const expect = chai.expect;

describe('MessageTypes tests', () => {
    var MessageTypes = require('../message-types');

    it('should be an object', (done) => {
        expect(MessageTypes).to.be.an('object');
        done();
    });

    it('should be frozen', (done) => {
        // change a property
        expect(() => {
            MessageTypes[0] = {}
        }).to.throw('Cannot add property 0, object is not extensible');
        // add a property
        expect(() => {
            MessageTypes['NonexistentMessageType'] = {}
        }).to.throw('Cannot add property NonexistentMessageType, object is not extensible');
        done();
    });

    it('should have two properties', (done) => {
        // this test should be updated as keys are added to the enum
        // this will help ensure that if the enum is changed, the tests will at least get looked at
        expect(Object.keys(MessageTypes).length).to.equal(2);
        done();
    });

    it('should have a None property', (done) => {
        expect(MessageTypes.None).to.not.be.undefined;
        expect(MessageTypes.None).to.have.property('responseString');
        expect(MessageTypes.None.responseString).to.be.undefined;
        done();
    });

    it('should have a Ping property', (done) => {
        expect(MessageTypes.Ping).to.not.be.undefined;
        expect(MessageTypes.Ping).to.have.property('responseString');
        expect(MessageTypes.Ping.responseString).to.be.a('string').and.equal('pong');
        done();
    });
});
