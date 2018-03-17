//-----------------------------------------------------------------------
// <copyright file = "message-types.js">
// Copyright (c) 2018 Me!. All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

'use strict';

const fs = require('fs');
const path = require('path');
const request = require('request');

const odinUtil = require('./odin-util');

const insults = require('./insults');

const MessageTypes = {
    None: {
        respond: () => {
            return undefined;
        }
    },
    Ping: {
        respond: (channel) => {
            channel.send('pong');
        }
    },
    Fail: {
        respond: (channel) => {
            channel.send('u tried :(', {
                files: ['images/fail/u_tried.png']
            });
        }
    },
    Mock: {
        respond: (stringToMock, channel) => {
            channel.send('abcdefghijklmnopqrstuvwxyz ' + stringToMock);
        }
    },
    Frick: {
        respond: (channel) => {
            channel.send('B&');
        }
    },
    FiteMe: {
        respond: (target, bully, channel) => {
            let fiteString = `Hey ${target}, ${bully} has started a fight with you!\n`;
            fiteString += Math.random() < 0.5 ? '...and you lost!' : '...and you won!';

            channel.send(fiteString);
        }
    },
    Brawl: {
        respond: (belligerent, mentions, channel) => {
            let response = 'A huge brawl has broken out!\n';

            if (mentions != undefined) {
                if (mentions.everyone) {
                    response = `${belligerent} foolishly tried to start a fight with everybody and it did not go well for them.`;
                } else {
                    let winner = odinUtil.getRandomInt(mentions.users.array().length);
                    response += mentions.users.array()[winner].toString();
                    response += ' has emerged victorious!';
                }
            }

            channel.send(response);
        }
    },
    Insult: {
        respond: (target, bully, channel) => {
            let firstWord = insults.first[Math.floor(Math.random() * insults.first.length)];
            let insultString = `Hey ${target}, ${bully} thinks `;
            if(target == 'everyone') {
                insultString += 'each of you is ';
            } else {
                insultString += 'you\'re ';
            }
            insultString += odinUtil.isVowel(firstWord[0]) ? 'an ' : 'a ';
            insultString += firstWord +
                ' ' +
                insults.second[Math.floor(Math.random() * insults.second.length)] +
                ' ' +
                insults.third[Math.floor(Math.random() * insults.third.length)] +
                '!';

            channel.send(insultString);
        }
    },
    Hug: {
        respond: (mentions, channel) => {
            let hugFile = [];
            let hugFilePath = path.join(__dirname, 'images/hugs');
            let hugFiles = fs.readdirSync(hugFilePath);
            if (hugFiles != undefined && hugFiles.length > 0) {
                hugFile.push(path.join(hugFilePath, hugFiles[Math.floor(Math.random() * hugFiles.length)]));
            }

            let hugText = 'Have a hug, ';
            if (mentions.everyone) {
                hugText += 'everyone';
            } else {
                for(let user of mentions.users.array()) {
                    hugText += user.toString() + ' ';
                }
            }

            hugText = hugText.trim() + '!';

            channel.send(hugText, {
                files: hugFile
            });
        }
    },
    Help: {
        respond: (channel) => {
            let helpText = "'bot help' - The thing you just said. Tells you everything I can do.\n" +
                "'ping' - Pretty boring, just used to verify that the bot is working.\n" +
                "'fail' - Gives a fail award.\n" +
                "'f r i c k' - If any message contains this word (Minus the spaces. I don't want to ban myself!), you get banned.\n" +
                "'fite me <user mention>' - Starts a fight with someone. Be wary! You might lose!\n" +
                "'insult <everyone | user mention>' - Hurl a devastating insult at someone. Really not very nice. (Please don't try to insult more than one person, I get confused after the first one.)\n" +
                "'brawl! <everyone | multiple user mentions>' - Starts a huge brawl with everyone mentioned. There can be only one survivor!\n" +
                "'hug <user mention>' - Sends a virtual hug, targeted with laser-like precision.";

            channel.send(helpText);
        }
    }
};

// freeze the MessageTypes object so that it cannot be changed
module.exports = Object.freeze(MessageTypes);