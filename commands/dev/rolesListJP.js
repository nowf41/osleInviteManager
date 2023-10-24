const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('roleslist')
        .setDescription('このサーバーでのロールの一覧を表示します。'),
    async execute(interaction){
        let replyText = '```';
        interaction.guild.roles.cache.forEach(role => replyText += `${role.name}\n`);
        replyText += '```';
        await interaction.reply({content: replyText, ephemeral: true });
    }
}