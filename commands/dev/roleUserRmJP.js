const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rurm')
        .setDescription('ロールからユーザーを削除します。')
        .addUserOption(option => option
            .setName('user')
            .setDescription('削除対象のユーザーを設定します。')
        )
        .addRoleOption(option => option
            .setName('role')
            .setDescription('削除対象のロールを設定します。')),
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
            await member.roles.remove(role);
            interaction.reply({ content: `ユーザーからロールを削除しました: ${role.name}。当該ユーザーに指定のロールが割り当てられていなかった場合は削除されていないことがあります。`, ephemeral: true });
        } catch (error) {
            console.error(`ロールを削除中にエラーが発生しました: ${error}`);
            interaction.reply({ content: 'ロールを削除できませんでした。', ephemeral: true });
        }
    }
}