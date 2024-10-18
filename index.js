const { Client, GatewayIntentBits } = require('discord.js');
const { prefix } = require('./config.json');

const token = process.env['DISCORD_TOKEN']

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once('ready', () =>{
    console.log('Bot is Online!');
});

client.on('messageCreate', message =>{
    if(message.author.bot) return;

    if(message.content.startsWith(prefix)){
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        if(command === 'ping'){
            message.channel.send('Pong!');
        }

        if(command === 'hello'){
            message.channel.send('Hiya!');
        }
    }


});

client.login(token);