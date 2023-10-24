const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong and your username!'),
    async execute(interaction){
        const reply = `Pong! Got ping successfully from ${interaction.user.username}`
        await interaction.reply({content: reply, ephemeral: true });
    }
}