const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('fox')
        .setDescription('fox bot\'s main command')
        .addSubcommand(subcommand =>
            subcommand
                .setName('info')
                .setDescription('Show information')
        ),
        async execute(interaction) {
            switch(interaction.options.getSubcommand()) {
                case 'info' : info(interaction);break;
            }
        }
};

async function info(interaction) {
    const info = require('./../../source/info.json');
    const message = `commands sheet: ${info.foxsheet}\n`;
    interaction.reply({ephemeral: true, content: message});
}