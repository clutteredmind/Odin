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

    it('should have twleve properties', (done) => {
        // this test should be updated as keys are added to the object
        // this will help ensure that if the object is changed, the tests will at least get looked at
        expect(Object.keys(MessageTypes).length).to.equal(12);
        done();
    });

    it('should have a None property', (done) => {
        expect(MessageTypes.None).to.not.be.undefined;
        expect(MessageTypes.None).to.be.empty;
        done();
    });

    it('should have a Help property', (done) => {
        expect(MessageTypes.Help).to.not.be.undefined;
        expect(MessageTypes.Help).to.have.property('respond');
        expect(MessageTypes.Help.respond).to.be.a('function');
        done();
    });

    it('should have a Ping property', (done) => {
        expect(MessageTypes.Ping).to.not.be.undefined;
        expect(MessageTypes.Ping).to.have.property('respond');
        expect(MessageTypes.Ping.respond).to.be.a('function');
        done();
    });

    it('should have a Fail property', (done) => {
        expect(MessageTypes.Fail).to.not.be.undefined;
        expect(MessageTypes.Fail).to.have.property('respond');
        expect(MessageTypes.Fail.respond).to.be.a('function');
        done();
    });

    it('should have a Mock property', (done) => {
        expect(MessageTypes.Mock).to.not.be.undefined;
        expect(MessageTypes.Mock).to.have.property('respond');
        expect(MessageTypes.Mock.respond).to.be.a('function');
        done();
    });

    it('should have a Frick property', (done) => {
        expect(MessageTypes.Frick).to.not.be.undefined;
        expect(MessageTypes.Frick).to.have.property('respond');
        expect(MessageTypes.Frick.respond).to.be.a('function');
        done();
    });

    it('should have a FiteMe property', (done) => {
        expect(MessageTypes.FiteMe).to.not.be.undefined;
        expect(MessageTypes.FiteMe).to.have.property('respond');
        expect(MessageTypes.FiteMe.respond).to.be.a('function');
        done();
    });

    it('should have a Brawl property', (done) => {
        expect(MessageTypes.Brawl).to.not.be.undefined;
        expect(MessageTypes.Brawl).to.have.property('respond');
        expect(MessageTypes.Brawl.respond).to.be.a('function');
        done();
    });

    it('should have a Insult property', (done) => {
        expect(MessageTypes.Insult).to.not.be.undefined;
        expect(MessageTypes.Insult).to.have.property('respond');
        expect(MessageTypes.Insult.respond).to.be.a('function');
        done();
    });

    it('should have a Hug property', (done) => {
        expect(MessageTypes.Hug).to.not.be.undefined;
        expect(MessageTypes.Hug).to.have.property('respond');
        expect(MessageTypes.Hug.respond).to.be.a('function');
        done();
    });

    it('should have a Question property', (done) => {
        expect(MessageTypes.Question).to.not.be.undefined;
        expect(MessageTypes.Question).to.have.property('respond');
        expect(MessageTypes.Question.respond).to.be.a('function');
        done();
    });

    it('should have a Punch property', (done) => {
        expect(MessageTypes.Punch).to.not.be.undefined;
        expect(MessageTypes.Punch).to.have.property('respond');
        expect(MessageTypes.Punch.respond).to.be.a('function');
        done();
    });
});