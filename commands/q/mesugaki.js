const { SlashCommandBuilder } = require('discord.js');
const Sentence = require('../../source/mesugaki.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mesugaki')
        .setDescription('メスガキ語録からランダムな文を返します。')
        .addSubcommand(subcommand => subcommand.setName('info').setDescription('このコマンドの用法やバージョンなどを返します。'))
        .addSubcommand(subcommand => subcommand.setName('sentence').setDescription('チャンネル内にメスガキ語録の内1つを投稿します。'))
        .addSubcommand(subcommand => subcommand.setName('sentence-eph').setDescription('あなただけにメスガキ語録の内1つを表示します。')),
    async execute(interaction){
        const n = parseInt(Math.random() * Sentence.sentence.length);
        const subcommand = interaction.options.getSubcommand();
        //const opt = interaction.options.getString('how') ?? '[ERROR]required option "txt" cannot be empty';
        switch(subcommand){
            case 'info': await interaction.reply({content: Sentence.info, ephemeral:true});break;
            case 'sentence': await interaction.reply(Sentence.sentence[n]);break;
            case 'sentence-eph': await interaction.reply({content: Sentence.sentence[n], ephemeral:true});break;
            default: console.log(opt);
        }
    }
}