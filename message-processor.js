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

const processDiscordMessage = (discordMessage) => {
    var messageType = MessageTypes.None;
    // only deal with the message if it's an object (with minimal object type validation)
    if (Object.prototype.toString.call(discordMessage) === '[object Object]' && discordMessage.content != undefined) {
        // we want to catch anything that might go wrong so the bot doesn't crash
        try {
            var messageContent = discordMessage.content.toLowerCase();
            if (messageContent === 'bot help') {
                messageType = MessageTypes.Help;
            } else if (messageContent === 'ping') {
                messageType = MessageTypes.Ping;
            } else if (messageContent === 'fail') {
                messageType = MessageTypes.Fail;
            } else if (messageContent.includes('frick')) {
                messageType = MessageTypes.Frick;
            } else if (messageContent.includes('fite me') && discordMessage.mentions.users.array().length == 1) {
                messageType = MessageTypes.FiteMe;
            }
        } catch (error) {
            // log all errors
            logger.log('error', `An error occurred in the message processor: ${error.message}`);
        }
    }

    return messageType;
}

module.exports = processDiscordMessage;