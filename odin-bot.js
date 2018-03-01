'use strict';

// load dependencies
const request = require('request');
const Discord = require('discord.js');

const auth = require('./auth.json');

const bot = new Discord.Client();

bot.on('ready', () => {
    // TODO: replace this with proper logging
    console.log('Connected...');
});

// handle all incoming messages
bot.on('message', (message) => {
    if(message.content.toLowerCase() == 'ping') {
        message.channel.send('pong');
    }
});

// log in
bot.login(auth.token);
