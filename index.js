const { Client, Events, GatewayIntentBits } = require('discord.js');
const { dev } = require('./config.json');

//create a new client instance
const app = new Client({ intents: [GatewayIntentBits.Guilds] });

//client ready listener
app.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

//log in
app.login(dev.token);