const { SlashCommandBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('hello')
        .setDescription('Replies with Hello!'),
    async execute(interaction){
        const now = new Date().getHours;
        let aisatsu = '';
        if(now <= 10) aisatsu='Good Morning'
        else if(now <= 18) aisatsu='Good Afternoon'
        else if(now <= 24) aisatsu='Good Night'
        else aisatsu='Hi'
        interaction.reply(`${aisatsu}, ${interaction.author.displayName}!`);
    }
}