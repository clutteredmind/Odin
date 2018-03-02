//-----------------------------------------------------------------------
// <copyright file = "test-bot.js">
// Copyright (c) 2018 Me!. All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

'use strict';

const chai = require('chai');
const expect = chai.expect;

describe('discord-client tests', () => {
    const client = require('../discord-client');
    
    it('should expose a function called makeBot', (done) => {
        expect(client).to.be.a('function');
        expect(client.name).to.equal('makeBot');
        done();
    });

    describe('bot tests', () => {
        var bot;

        beforeEach(() => {
            bot = client();
        });

        it('should create a bot object', (done) => {
            expect(bot).to.not.be.undefined;
            expect(bot).to.be.an('object');
            done();
        });

        it('should not process typing events', (done) => {
            expect(bot).to.have.property('options');
            expect(bot.options).to.be.an('object');
            expect(bot.options.disabledEvents).to.be.an('array');
            expect(bot.options.disabledEvents).to.include('TYPING_START');
            done();
        });

        it('should handle ready events', (done) => {
            expect(bot).to.have.property('_events');
            expect(bot._events).to.be.an('object');
            expect(bot._events.ready).to.not.be.undefined;
            expect(bot._events.ready).to.be.a('function');
            done();
        });

        it('should handle message events', (done) => {
            expect(bot).to.have.property('_events');
            expect(bot._events).to.be.an('object');
            expect(bot._events.message).to.not.be.undefined;
            expect(bot._events.message).to.be.a('function');
            done();
        });

        it('should handle error events', (done) => {
            expect(bot).to.have.property('_events');
            expect(bot._events).to.be.an('object');
            expect(bot._events.error).to.not.be.undefined;
            expect(bot._events.error).to.be.a('function');
            done();
        });
    });
});
