const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ruadd')
        .setDescription('ロールにユーザーを追加します。')
        .addUserOption(option => option
            .setName('user')
            .setDescription('追加対象のユーザーを設定します。')
        )
        .addRoleOption(option => option
            .setName('role')
            .setDescription('追加対象のロールを設定します。')),
    async execute(interaction){
        const user = interaction.options.getUser('user');
        const role = interaction.options.getRole('role');
        if (!user || !role) {
            return interaction.reply({ content: '指定されたユーザーまたはロールが無効です。', ephemeral: true });
        }
          const member = interaction.guild.members.cache.get(user.id);
          if (!member) {
            return interaction.reply({ content: '指定されたユーザーはサーバーのメンバーではありません。', ephemeral: true });
        }
        try {
            await member.roles.add(role);
            interaction.reply({ content: `ユーザーにロールを付与しました: ${role.name}`, ephemeral: true });
        } catch (error) {
            console.error(`ロールを付与中にエラーが発生しました: ${error}`);
            interaction.reply({ content: 'ロールを付与できませんでした。', ephemeral: true });
        }
    }
}