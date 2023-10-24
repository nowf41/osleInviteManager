const { SlashCommandBuilder, Guild, Role, GuildMember, PermissionsBitField } = require('discord.js');
const colours = [
    { name: 'Default', value: 'Default' },
    { name: 'White', value: 'White' },
    { name: 'Aqua', value: 'Aqua' },
    { name: 'Green', value: 'Green' },
    { name: 'Blue', value: 'Blue' },
    { name: 'Yellow', value: 'Yellow' },
    { name: 'Purple', value: 'Purple' },
    { name: 'LuminousVividPink', value: 'LuminousVividPink' },
    { name: 'Fuchsia', value: 'Fuchsia' },
    { name: 'Gold', value: 'Gold' },
    { name: 'Orange', value: 'Orange' },
    { name: 'Red', value: 'Red' },
    { name: 'Grey', value: 'Grey' },
    { name: 'Navy', value: 'Navy' },
    { name: 'DarkAqua', value: 'DarkAqua' },
    { name: 'DarkGreen', value: 'DarkGreen' },
    { name: 'DarkBlue', value: 'DarkBlue' },
    { name: 'DarkPurple', value: 'DarkPurple' },
    { name: 'DarkVividPink', value: 'DarkVividPink' },
    { name: 'DarkGold', value: 'DarkGold' },
    { name: 'DarkOrange', value: 'DarkOrange' },
    { name: 'DarkRed', value: 'DarkRed' },
    { name: 'DarkGrey', value: 'DarkGrey' },
    { name: 'DarkerGrey', value: 'DarkerGrey' },
    { name: 'LightGrey', value: 'LightGrey' },
    { name: 'DarkNavy', value: 'DarkNavy' },
    { name: 'Blurple', value: 'Blurple' },
    { name: 'Greyple', value: 'Greyple' },
    { name: 'DarkButNotBlack', value: 'DarkButNotBlack' },
    { name: 'NotQuiteBlack', value: 'NotQuiteBlack' },
    { name: 'Random', value: 'Random' }
]
module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('role')
        .setDescription('Managing Role')
        .addSubcommand(subcommand =>
            subcommand.setName('adddec')
            .setDescription('Add Decoration Role')
            .addStringOption(option => option
                .setName('color')
                .setRequired(true)
                .setDescription('Colors of new role')
                .addChoices(
                    { name: 'Default', value: 'Default' },
                    { name: 'White', value: 'White' },
                    { name: 'Aqua', value: 'Aqua' },
                    { name: 'Green', value: 'Green' },
                    { name: 'Blue', value: 'Blue' },
                    { name: 'Yellow', value: 'Yellow' },
                    { name: 'Purple', value: 'Purple' },
                    { name: 'Gold', value: 'Gold' },
                    { name: 'Orange', value: 'Orange' },
                    { name: 'Red', value: 'Red' },
                    { name: 'Grey', value: 'Grey' },
                    { name: 'DarkAqua', value: 'DarkAqua' },
                    { name: 'DarkGreen', value: 'DarkGreen' },
                    { name: 'DarkBlue', value: 'DarkBlue' },
                    { name: 'DarkPurple', value: 'DarkPurple' },
                    { name: 'DarkVividPink', value: 'DarkVividPink' },
                    { name: 'DarkGold', value: 'DarkGold' },
                    { name: 'DarkOrange', value: 'DarkOrange' },
                    { name: 'DarkRed', value: 'DarkRed' },
                    { name: 'DarkGrey', value: 'DarkGrey' },
                    { name: 'DarkerGrey', value: 'DarkerGrey' },
                    { name: 'LightGrey', value: 'LightGrey' },
                    { name: 'DarkNavy', value: 'DarkNavy' },
                    { name: 'DarkButNotBlack', value: 'DarkButNotBlack' },
                    { name: 'Random', value: 'Random' },
                ))
            .addBooleanOption(option => option
                .setName('hoist')
                .setRequired(true)
                .setDescription('Show in List of Active Users'))
            .addStringOption(option =>
                option.setName('newrolename')
                .setRequired(true)
                .setDescription('Enter name of New Role'))),
    async execute(interaction){
        const roleColor = interaction.options.getString('color') ?? 'Default';
        ifs: if(interaction.options.getSubcommand() === 'adddec'){
            console.log(interaction.options.getSubcommand())
                interaction.guild.roles.create({
                    name: interaction.options.getString('newrolename'),
                    color: roleColor,
                    permissions: 0n,
                    hoist: interaction.options.getBoolean('hoist')
                })
                .then((Role) => {
                    const replyText = `Created Role: "${Role.name}"; color: ${Role.color}; by: User/${interaction.user.username}; hoist:${Role.hoist}`;
                    interaction.reply({content: replyText, ephemeral: true })
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }
}