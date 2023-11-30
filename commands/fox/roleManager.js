const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('rlmgr')
        .setDescription('Manage Roles')
        /** Create Groupchat; create <name:Str> [role:Str] */
        .addSubcommand(subcommand =>
            subcommand
                .setName('remove')
                .setDescription('Remove role what name is equals arg')
                //name of gc :name
                .addStringOption(option => option
                    .setName('name')
                    .setDescription('Role Name To Remove')
                    .setRequired(true)
                )
                .addStringOption(option => option
                    .setName('reason')
                    .setDescription('Reason To Remove')
                    .setRequired(true)
                )
        ),
        async execute(interaction) {
            try{
                switch(interaction.options.getSubcommand()) {
                    case 'remove' : remove(interaction);break;
                }
            } catch(e) {console.log(e)}
        }
};

async function remove(interaction) {
    const a = interaction.options.getString('name');
    const b = interaction.options.getString('reason');
    interaction.guild.roles.fetch();

    let i = 0;
    try {
        const a2 = interaction.guild.roles.cache.forEach(v => {
            if( i === 0 && v.name === a) {v.delete(b); i++ }
        });
    } finally {
        (i !== 0)
        ? interaction.reply({ephemeral: true, content: `removed ${i} role(s) successfully!`})
        : interaction.reply({ephemeral: true, content: `The roles aren't removed.`});
    }
}