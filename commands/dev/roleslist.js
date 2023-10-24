const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('roleslist')
        .setDescription('Replies list of roles of this server!'),
    async execute(interaction){
        let replyText = '```';
        interaction.guild.roles.cache.forEach(role => replyText += `${role.name}\n`);
        replyText += '```';
        await interaction.reply({content: replyText, ephemeral: true });
    }
}