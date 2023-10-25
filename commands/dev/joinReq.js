const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('submitrequesttojoin')
        .setDescription('Submit your request to join')
        .addStringOption(option => option
            .setName('serverid')
            .setDescription('Set serverID you want to join')
            .setRequired(true)),
        async execute(interaction) {
            let elem;
            const user = interaction.user;
            const guild = interaction.client.guilds.cache.get(interaction.options.getString('serverid'))
            const channel = guild.channels.cache.forEach(element => {if(element.name === 'joinrequest'){elem = element}});

            await interaction.reply({content: 'sending...', ephemeral: true});
            if(interaction.options.getString('serverid').length < 18) return
            guild.members.cache.forEach(element =>{
                    if(element === user){interaction.editReply('Cancelled request: You are already belongs to this server.')};console.log(element)});

            elem.send(`Got new join request: ${interaction.user.toString()}`)
                .then(interaction.editReply({content: `Success! sent a request.`, ephemeral: true}))
                .catch((e) => interaction.editReply({content: `An error has occured, your request didn't sent: ${e}`, ephemeral: true}))
        },
}