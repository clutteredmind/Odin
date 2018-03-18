//-----------------------------------------------------------------------
// <copyright file = "test-insults.js">
// Copyright (c) 2018 Me!. All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

'use strict';

const chai = require('chai');
const expect = chai.expect;

const insults = require('../insults');

describe('insult object tests', () => {
    it('should be an object', (done) => {
        expect(insults).to.be.an('object');
        done();
    });

    it('should have first, second, and third arrays', (done) => {
        expect(insults.first).to.be.an('array');
        expect(insults.second).to.be.an('array');
        expect(insults.third).to.be.an('array');
        done();
    });

    it('should have three properties', (done) => {
        expect(Object.keys(insults).length).to.equal(3);
        done();
    });
});