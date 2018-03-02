//-----------------------------------------------------------------------
// <copyright file = "test-message-processor.js">
// Copyright (c) 2018 Me!. All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

'use strict';

const chai = require('chai');
const expect = chai.expect;

describe('message processor tests', () => {
    const MessageTypes = require('../message-types');
    const messageProcessor = require('../message-processor');

    it('should be a function', (done) => {
        expect(messageProcessor).to.be.a('function');
        expect(messageProcessor.name).to.equal('processDiscordMessage');
        done();
    });

    it('should return MessageTypes.None if not given an argument', () => {
        expect(messageProcessor()).to.equal(MessageTypes.None);
    });

    it('should return MessageTypes.None if given undefined', () => {
        expect(messageProcessor(undefined)).to.equal(MessageTypes.None);
    });

    it('should return MessageTypes.None if given a non-object or an empty object argument', () => {
        expect(messageProcessor({})).to.equal(MessageTypes.None);
        expect(messageProcessor(1)).to.equal(MessageTypes.None);
        expect(messageProcessor(true)).to.equal(MessageTypes.None);
    });
});
