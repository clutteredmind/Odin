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

    it('should have ten properties', (done) => {
        // this test should be updated as keys are added to the enum
        // this will help ensure that if the enum is changed, the tests will at least get looked at
        expect(Object.keys(MessageTypes).length).to.equal(10);
        done();
    });

    it('should have a None property', (done) => {
        expect(MessageTypes.None).to.not.be.undefined;
        expect(MessageTypes.None).to.have.property('response');
        expect(MessageTypes.None.response).to.be.a('function');
        expect(MessageTypes.None).to.have.property('files');
        expect(MessageTypes.None.response()).to.be.undefined;
        done();
    });

    it('should have a Help property', (done) => {
        expect(MessageTypes.Help).to.not.be.undefined;
        expect(MessageTypes.Help).to.have.property('response');
        expect(MessageTypes.Help.response).to.be.a('function');
        expect(MessageTypes.Help).to.have.property('files');
        expect(MessageTypes.Help.response()).to.be.a('string');
        done();
    });

    it('should have a Ping property', (done) => {
        expect(MessageTypes.Ping).to.not.be.undefined;
        expect(MessageTypes.Ping).to.have.property('response');
        expect(MessageTypes.Ping.response).to.be.a('function');
        expect(MessageTypes.Ping).to.have.property('files');
        expect(MessageTypes.Ping.response()).to.equal('pong');
        done();
    });

    it('should have a Fail property', (done) => {
        expect(MessageTypes.Fail).to.not.be.undefined;
        expect(MessageTypes.Fail).to.have.property('response');
        expect(MessageTypes.Fail.response).to.be.a('function');
        expect(MessageTypes.Fail).to.have.property('files');
        expect(MessageTypes.Fail.response()).to.equal('u tried :(');
        done();
    });

    it('should have a Mock property', (done) => {
        expect(MessageTypes.Mock).to.not.be.undefined;
        expect(MessageTypes.Mock).to.have.property('response');
        expect(MessageTypes.Mock.response).to.be.a('function');
        expect(MessageTypes.Mock).to.have.property('files');
        expect(MessageTypes.Mock.response()).to.be.undefined;
        done();
    });

    it('should have a Frick property', (done) => {
        expect(MessageTypes.Frick).to.not.be.undefined;
        expect(MessageTypes.Frick).to.have.property('response');
        expect(MessageTypes.Frick.response).to.be.a('function');
        expect(MessageTypes.Frick).to.have.property('files');
        expect(MessageTypes.Frick.response()).to.equal('B&');
        done();
    });

    it('should have a FiteMe property', (done) => {
        expect(MessageTypes.FiteMe).to.not.be.undefined;
        expect(MessageTypes.FiteMe).to.have.property('response');
        expect(MessageTypes.FiteMe.response).to.be.a('function');
        expect(MessageTypes.FiteMe).to.have.property('files');
        expect(MessageTypes.FiteMe.response()).to.be.a('string');
        done();
    });

    it('should have a Brawl property', (done) => {
        expect(MessageTypes.Brawl).to.not.be.undefined;
        expect(MessageTypes.Brawl).to.have.property('response');
        expect(MessageTypes.Brawl.response).to.be.a('function');
        expect(MessageTypes.Brawl).to.have.property('files');
        done();
    });

    it('should have a Insult property', (done) => {
        expect(MessageTypes.Insult).to.not.be.undefined;
        expect(MessageTypes.Insult).to.have.property('response');
        expect(MessageTypes.Insult.response).to.be.a('function');
        expect(MessageTypes.Insult).to.have.property('files');
        expect(MessageTypes.Insult.response()).to.be.a('string');
        done();
    });

    it('should have a Hug property', (done) => {
        expect(MessageTypes.Hug).to.not.be.undefined;
        expect(MessageTypes.Hug).to.have.property('response');
        expect(MessageTypes.Hug.response).to.be.a('function');
        expect(MessageTypes.Hug).to.have.property('files');
        expect(MessageTypes.Hug.response()).to.be.undefined;
        done();
    });
});