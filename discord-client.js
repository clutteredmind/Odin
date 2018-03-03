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

            switch (messageType) {
                case MessageTypes.Help:
                case MessageTypes.Ping:
                case MessageTypes.Fail:
                case MessageTypes.Frick:
                    responseString = messageType.response();
                    fileList = messageType.files;
                    break;
                case MessageTypes.FiteMe:
                case MessageTypes.Insult:
                    responseString = messageType.response(message.mentions.users.first().toString(), message.author.username);
                    fileList = messageType.files;
                    break;
                case MessageTypes.Brawl:
                    responseString = messageType.response(message.mentions);
                    fileList = messageType.files;
                    break;
                case MessageTypes.Hug:
                    responseString = messageType.response(message.mentions.users.first().toString());
                    fileList = messageType.files;
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