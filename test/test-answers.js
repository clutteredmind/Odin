//-----------------------------------------------------------------------
// <copyright file = "test-answers.js">
// Copyright (c) 2018 Me!. All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

'use strict';

const chai = require('chai');
const expect = chai.expect;

const answers = require('../answers');

describe('answer object tests', () => {
    it('should be an object', (done) => {
        expect(answers).to.be.an('object');
        done();
    });

    it('should have an answers array', (done) => {
        expect(answers.answers).to.be.an('array');
        done();
    });

    it('should have four properties', (done) => {
        expect(Object.keys(answers).length).to.equal(1);
        done();
    });
});