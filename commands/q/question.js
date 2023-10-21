const { SlashCommandBuilder } = require('discord.js');
const Sentence = require('../../source/question.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('question')
        .setDescription('ランダムな質問を返します。')
        .addSubcommand(subcommand => subcommand.setName('info').setDescription('このコマンドの用法やバージョンなどを返します。'))
        .addSubcommand(subcommand => subcommand.setName('normal').setDescription('チャンネル内に質問群の内1つを表示します。'))
        .addSubcommand(subcommand => subcommand.setName('normal-eph').setDescription('あなただけに質問群の内1つを表示します。')),
    async execute(interaction){
        const n = parseInt(Math.random() * Sentence.sentence.length);
        const subcommand = interaction.options.getSubcommand();
        //const opt = interaction.options.getString('how') ?? '[ERROR]required option "txt" cannot be empty';
        switch(subcommand){
            case 'info': await interaction.reply({content: Sentence.info, ephemeral:true});break;
            case 'normal': await interaction.reply(Sentence.sentence[n]);break;
            case 'normal-eph': await interaction.reply({content: Sentence.sentence[n], ephemeral:true});break;
            default: console.log(opt);
        }
    }
}