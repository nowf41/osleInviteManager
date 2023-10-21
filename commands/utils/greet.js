const { SlashCommandBuilder } = require('discord.js');


module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('greet')
        .setDescription('Replies time and greet!'),
    async execute(interaction){
        //await interaction.deferReply();
        const now = new Date();
        const nowT = {
            hours: now.getHours(),
            minits: (('00' + now.getMinutes()).slice(-2))
        }
        let aisatsu;
        if(nowT.hours >= 5 && nowT.hours <= 12){aisatsu='おはよう'
        }else if(nowT.hours > 12 && nowT.hours <= 18){aisatsu='こんにちは'
        }else if(nowT.hours > 18 || nowT.hours < 5){aisatsu='こんばんは'
        }else{aisatsu='Hi'};
        const reply = `${interaction.user.username}おにいちゃん、${aisatsu}♥ いまの時間もわかんないのぉ?♥ なっさけな～い♥ いまは${nowT.hours}時${nowT.minits}分だよぉ♥`;
        await interaction.reply({content: reply, ephemeral: true });
    }
}