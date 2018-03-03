//-----------------------------------------------------------------------
// <copyright file = "test-odin-utils.js">
// Copyright (c) 2018 Me!. All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

'use strict';

const chai = require('chai');
const expect = chai.expect;

const odinUtil = require('../odin-util');

describe('Odin utilities tests', () => {
    it('should be an object', (done) => {
        expect(odinUtil).to.be.an('object');
        done();
    });

    it('should be frozen', (done) => {
        // change a property
        expect(() => {
            odinUtil[0] = {}
        }).to.throw('Cannot add property 0, object is not extensible');
        // add a property
        expect(() => {
            odinUtil['NonexistentItem'] = {}
        }).to.throw('Cannot add property NonexistentItem, object is not extensible');
        done();
    });

    describe('getRandomInt tests', () => {
        it('should have a getRandomInt function', (done) => {
            expect(odinUtil.getRandomInt).to.be.a('function');
            done();
        });

        it('should return NaN with no arguments', (done) => {
            expect(odinUtil.getRandomInt()).to.be.NaN;
            done();
        });

        it('should return an integer', (done) => {
            expect(odinUtil.getRandomInt(5)).to.be.a('number');
            done();
        });
    });

    describe('isVowelTests', () => {
        it('should have an isVowel function', (done) => {
            expect(odinUtil.isVowel).to.be.a('function');
            done();
        });

        it('should return false with non-vowel arguments', (done) => {
            expect(odinUtil.isVowel()).to.be.false;
            expect(odinUtil.isVowel(1)).to.be.false;
            expect(odinUtil.isVowel(true)).to.be.false;
            expect(odinUtil.isVowel('c')).to.be.false;
            expect(odinUtil.isVowel('a string')).to.be.false;
            done();
        });

        it('should return true for vowels', (done) => {
            expect(odinUtil.isVowel('a')).to.be.true;
            done();
        });
    });
});