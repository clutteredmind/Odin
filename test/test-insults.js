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

    it('should be frozen', (done) => {
        // change a property
        expect(() => {
            insults[0] = {}
        }).to.throw('Cannot add property 0, object is not extensible');
        // add a property
        expect(() => {
            insults['NonexistentInsult'] = {}
        }).to.throw('Cannot add property NonexistentInsult, object is not extensible');
        done();
    });

    it('should have three properties', (done) => {
        // all insults are three words long
        expect(Object.keys(insults).length).to.equal(3);
        done();
    });
});
