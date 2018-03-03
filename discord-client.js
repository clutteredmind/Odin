//-----------------------------------------------------------------------
// <copyright file = "discord-client.js">
// Copyright (c) 2018 Me!. All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

'use strict';

const logger = require('./logger');
const Discord = require('discord.js');
const MessageTypes = require('./message-types');
const processDiscordMessage = require('./message-processor');

function makeBot() {
    // create the bot
    const bot = new Discord.Client({
        disabledEvents: ['TYPING_START']
    });

    // the bot is connected and ready to go
    bot.on('ready', () => {
        logger.log('debug', 'Bot connected');
    });

    // handle all incoming messages
    bot.on('message', (message) => {
        const messageType = processDiscordMessage(message);

        // we want to catch anything that might go wrong so the bot doesn't crash
        try {
            let responseString = undefined;
            let fileList = [];
            let result = {};

            switch (messageType) {
                case MessageTypes.Help:
                case MessageTypes.Ping:
                case MessageTypes.Fail:
                case MessageTypes.Frick:
                    result = messageType.response();
                    responseString = result.message;
                    fileList = result.files;
                    break;
                case MessageTypes.FiteMe:
                case MessageTypes.Insult:
                    result = messageType.response(message.mentions.users.first().toString(), message.author.username);
                    responseString = result.message;
                    fileList = result.files;
                    break;
                case MessageTypes.Brawl:
                    result = messageType.response(message.mentions);
                    responseString = result.message;
                    fileList = result.files;
                    break;
                case MessageTypes.Hug:
                    result = messageType.response(message.mentions.users.first().toString());
                    responseString = result.message;
                    fileList = result.files;
                    break;
                case MessageTypes.None:
                default:
                    // do nothing by default or with messages of type None
                    break;
            }

            if (responseString != undefined) {
                message.channel.send(responseString, {
                    files: fileList
                });
            }
        } catch (error) {
            // log all errors
            logger.log('error', `An error occurred in the bot's message handler: ${error.message}`);
        }
    });

    bot.on('error', (error) => {
        logger.log('error', `There was an error with the bot: ${error.message}`);
    });

    return bot;
}

module.exports = makeBot;