const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('submitrequesttojoin')
        .setDescription('参加リクエストを送ります。')
        .addStringOption(option => option
            .setName('serverid')
            .setDescription('参加したいサーバーのIDを設定します。')
            .setRequired(true)),
        async execute(interaction) {
            let elem;
            const user = interaction.user;
            const guild = interaction.client.guilds.cache.get(interaction.options.getString('serverid'))
            const channel = guild.channels.cache.forEach(element => {if(element.name === 'joinrequest'){elem = element}});

            await interaction.reply({content: '送信中...', ephemeral: true});
            if(interaction.options.getString('serverid').length < 18) return
            guild.members.cache.forEach(element =>{
                    if(element === user){interaction.editReply('あなたは対象のサーバーにすでに属しているため、リクエストは破棄されました。')};console.log(element)});

            elem.send(`Got new join request: ${interaction.user.toString()}`)
                .then(interaction.editReply({content: `リクエストを送信しました。`, ephemeral: true}))
                .catch((e) => interaction.editReply({content: `エラー`, ephemeral: true}))
        },
}