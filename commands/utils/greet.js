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
        if(nowT.hours >= 5 && nowT.hours <= 12){aisatsu='Good Morning'
        }else if(nowT.hours > 12 && nowT.hours <= 18){aisatsu='Good Afternoon'
        }else if(nowT.hours > 18 || nowT.hours < 5){aisatsu='Good Night'
        }else{aisatsu='Hi'};
        await interaction.reply(`${aisatsu}, ${interaction.user.username}! It's ${nowT.hours}:${nowT.minits}!`);
    }
}