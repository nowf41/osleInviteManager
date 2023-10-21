const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    async execute(interaction){
        const reply = `${interaction.user.username}おにいちゃん、呼んだぁ～?♥ (Pong! ${interaction.user.username}からのコマンド入力を検知しました。)`
        await interaction.reply({content: reply, ephemeral: true });
    }
}