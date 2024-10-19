const { Client, GatewayIntentBits, Partials, ChannelType } = require('discord.js');
const { prefix } = require('./config.json');
require('dotenv').config();
const token = process.env.DISCORD_TOKEN;

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.DirectMessageTyping
    ],
    Partials: [
        Partials.Channel,
        Partials.Message
    ]
});

client.once('ready', () =>{
    console.log('Bot is Online!');
});

client.on('messageCreate', (message)=>{
    if(message.author.bot) return;

    console.log(`message received: ${message.content}`)
    if(message.channel.type === ChannelType.DM){
        console.log('DM detected');
        message.reply('I am a bot, please use channel for commands.');
    }

    // if(message.content.startsWith(prefix)){
    //     const args = message.content.slice(prefix.length).trim().split(/ +/);
    //     const command = args.shift().toLowerCase();

    //     if(command === 'ping'){
    //         message.channel.send('Pong!');
    //     }

    //     if(command === 'hello'){
    //         message.channel.send('Hiya!');
    //     }
    // }


});

client.login(token);