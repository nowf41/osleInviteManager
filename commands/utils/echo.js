const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('echo')
		.setDescription('Return inputed string')
		.addStringOption((option) =>
			option
			.setName('txt')
			.setDescription('What text should I return text?')
			.setRequired(true),
		),
		async execute(interaction) {
			const opt = interaction.options.getString('txt') ?? '[ERROR]required option "txt" cannot be empty';
			interaction.reply(`${opt}`);
		},
};