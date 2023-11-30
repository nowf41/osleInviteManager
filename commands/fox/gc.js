const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('gc')
        .setDescription('Manage Groupchat')
        /** Create Groupchat; create <name:Str> [role:Str] */
        .addSubcommand(subcommand =>
            subcommand
                .setName('create')
                .setDescription('Create GroupChat')
                //name of gc :name
                .addStringOption(option => option
                    .setName('name')
                    .setDescription('Name Of Groupchat')
                    .setRequired(true)
                    .setMaxLength(100)
                )

                //role for new gc :role
                .addRoleOption(option => option
                    .setName('role')
                    .setDescription('Role For allow access to Groupchat')
                    .setRequired(false)
                )
        ),
        async execute(interaction) {
            switch(interaction.options.getSubcommand()) {
                case 'create' : create(interaction);break;
            }
        }
};

async function create(interaction) {
    await interaction.guild.roles.fetch();
    const perm = {
        view: PermissionsBitField.Flags.ViewChannel
    }
    let args = {
        role: interaction.options.getRole('role'),
        everyoneRole: interaction.guild.roles.cache.find(role => role.name === '@everyone'),
        name: 'Group: ' + interaction.options.getString('name')
    }
    if(!args.role) args.role = await interaction.guild.roles.cache.find(r => r.name === args.name);
    if(!args.role) args.role = await interaction.guild.roles.create({
        name: args.name, color: getRandomColor()
      });
    const replyMsg = `Created Channel ${args.name} successfully! (role: #${args.role.id})`;
    interaction.guild.channels.create({
        name: args.name, type: 0,
        permissionOverwrites: [
            {id: args.role.id, allow: perm.view},
            {id: args.everyoneRole.id, deny: perm.view},
        ],
    })
    .then( () => interaction.reply({ephemeral: true, content: replyMsg}) )
    .catch( (e) => {
        interaction.reply({ephemeral: true, content: 'An Unknown Error Has Occured.'});
        console.log(e);
        }
    );
}

function getRandomColor() {
    const fn1 = () => {
        let a = Math.floor(Math.random() * 255).toString(16);
        if(a.length !== 2) { return ( '0' + a ) } else { return a; }
    }
    return '#' + fn1() + fn1() + fn1()
}