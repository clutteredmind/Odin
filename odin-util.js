//-----------------------------------------------------------------------
// <copyright file = "util.js">
// Copyright (c) 2018 Me!. All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

'use strict';

// generates and returns a random integer
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// returns true of the input value is a vowel, false otherwise
function isVowel(c) {
    var result = false;

    if (c != undefined && Object.prototype.toString.call(c) === '[object String]') {
        result = ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1;
    }

    return result;
}

// the eported object
const util = {
    getRandomInt: getRandomInt,
    isVowel: isVowel
};

module.exports = Object.freeze(util);