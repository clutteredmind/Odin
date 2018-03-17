//-----------------------------------------------------------------------
// <copyright file = "message-processor.js">
// Copyright (c) 2018 Me!. All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

'use strict';

// the Winston logger
const logger = require('./logger');

// message types enum
const MessageTypes = require('./message-types');

// look through the incoming message to see if it's something we need to respond to
const processDiscordMessage = (discordMessage) => {
    var messageType = MessageTypes.None;
    // only deal with the message if it's an object (with minimal object type validation)
    if (Object.prototype.toString.call(discordMessage) === '[object Object]' && discordMessage.content != undefined) {
        // we want to catch anything that might go wrong so the bot doesn't crash
        try {
            // extract the message's text
            var messageContent = discordMessage.content.toLowerCase();

            if (messageContent === 'bot help') {
                messageType = MessageTypes.Help;
            } else if (messageContent === 'ping') {
                messageType = MessageTypes.Ping;
            } else if (messageContent === 'fail') {
                messageType = MessageTypes.Fail;
            } else if (messageContent.includes('frick')) {
                messageType = MessageTypes.Frick;
            } else if (messageContent.startsWith('fite me') && discordMessage.mentions.users.array().length == 1) {
                messageType = MessageTypes.FiteMe;
            } else if(messageContent.startsWith('insult')) {
                messageType = MessageTypes.Insult;
            } else if(messageContent.startsWith('brawl!') && (discordMessage.mentions.users.array().length > 0 || discordMessage.mentions.everyone)) {
                messageType = MessageTypes.Brawl;
            } else if (messageContent.startsWith('hug')) {
                messageType = MessageTypes.Hug;
            } else if(messageContent.startsWith('mock')) {
                messageType = MessageTypes.Mock;
            }
        } catch (error) {
            // log all errors
            logger.log('error', `An error occurred in the message processor: ${error.message}`);
        }
    }

    return messageType;
}

module.exports = processDiscordMessage;