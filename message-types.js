//-----------------------------------------------------------------------
// <copyright file = "message-types.js">
// Copyright (c) 2018 Me!. All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

'use strict';

const MessageTypes = {
    None: {
        response: () => {
            return undefined;
        },
        files: []
    },
    Ping: {
        response: () => {
            return 'pong';
        },
        files: []
    },
    Fail: {
        response: () => {
            return 'u tried :(';
        },
        files: ['images/u_tried.png']
    },
    Mock: {
        response: () => {},
        files: []
    },
    Frick: {
        response: () => {
            return 'B&';
        },
        files: []
    },
    FiteMe: {
        response: (target, bully) => {
            let fiteString = `Hey ${target}, ${bully} has started a fight with you!\n`;
            fiteString += Math.random() < 0.5 ? '...and you lost!' : '...and you won!';
            return fiteString;
        },
        files: []
    },
    Brawl: {
        response: () => {},
        files: []
    },
    Insult: {
        response: () => {},
        files: []
    },
    Hug: {
        response: () => {},
        files: []
    },
    Help: {
        response: () => {
            return "'bot help' - displays all available commands\n" +
                "'ping' - Pretty boring, just used to verify the bot is working\n" +
                "'fail' - Gives a fail award\n" +
                "'f r i c k' - If any message contains this word (minus the spaces. I don't want to get kicked), you get banned\n";
        },
        files: []
    }
};

// freeze the MessageTypes object so that it cannot be changed. this effectively makes it an enum
module.exports = Object.freeze(MessageTypes);