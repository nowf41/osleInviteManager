const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('chmgr')
        .setDescription('Manage Channel')
        /** Create Groupchat; create <name:Str> [role:Str] */
        .addSubcommand(subcommand =>
            subcommand
                .setName('remove')
                .setDescription('Remove channel what name is equals arg')
                //name of gc :name
                .addStringOption(option => option
                    .setName('name')
                    .setDescription('Channel Name To Remove')
                    .setRequired(true)
                    .setMaxLength(100)
                )
        ),
        async execute(interaction) {
            switch(interaction.options.getSubcommand()) {
                case 'remove' : remove(interaction);break;
            }
        }
};

async function remove(interaction) {
    const a = interaction.options.getString('name');
    let i = 0;
    interaction.guild.channels.cache.forEach(element => {
        if(element.name === a) {element.delete(); i++ }
    });
    (i !== 0)
    ? interaction.reply({ephemeral: true, content: `removed ${i} channel(s) successfully!`})
    : interaction.reply({ephemeral: true, content: `The channels aren't removed.`});
}