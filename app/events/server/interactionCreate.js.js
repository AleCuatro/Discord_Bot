import { EmbedBuilder, InteractionType, ActionRowBuilder, ButtonBuilder, ButtonStyle, inlineCode, codeBlock} from 'discord.js'
import config from '../../../config.js';

export default async function(client, interaction) {
    if (interaction.type === InteractionType.ApplicationCommand) {
        if (!client.commands.has(interaction.commandName)) return;
        const command = client.commands.get(interaction.commandName)
        
        const guild = client.guilds.cache.get(interaction.guild.id)
        let serverCommandUse = `${guild} | Command: ${interaction.commandName} | Name: ${interaction.user.tag}`
        console.log(serverCommandUse)
        const channel = client.channels.cache.get('1051031559504924682');
        const serverCommandUseEmbed = new EmbedBuilder()
        .setDescription(codeBlock(serverCommandUse))
        .setTimestamp()
        .setColor('LuminousVividPink');
        channel.send({ embeds: [serverCommandUseEmbed]});

        try {
            if(command.botPermissionInGuild){
                if(!interaction.guild.members.me.permissions.has(command.botPermissionInGuild)) 
                    return interaction.reply({content: `The bot uses the following permissions, ${command.permissionInGuild.map(PERMISO => `\`${PERMISO}\``).join(", ")} if they are not enabled you must activate them, they are vital for the bot to work.`, ephemeral: true})
            }
            if (command.inVoiceChannel && !interaction.member.voice.channel) {
                return interaction.reply({ content: `<:error:1103874707696123914> You are not connected to a voice chat.`, ephemeral: true })
              }
            if (command.noSongInQueue) {
                const queue = client.player.nodes.get(interaction.guildId);
                if (!queue) {
                    const embed = new EmbedBuilder()
                    .setDescription("<:failed:1103875439295995934> There is no song in playlist")
                    .setColor('Red');
                    interaction.reply({ embeds: [embed], ephemeral: true })
                }
            }
            if (command.OnlyDevs){
                if (interaction.user.id !== config.developers.includes(interaction.user.id)) {
                    const embed = new EmbedBuilder()
                    .setDescription("<:privacy:1103876070912053378> Sorry, this command is only for the developer area.")
                    .setColor('Red');
                    interaction.reply({ embeds: [embed], ephemeral: true })
                }
            }
            if (command.Maintenance){
                if (interaction.user.id !== config.developers.includes(interaction.user.id)) {
                    const embed = new EmbedBuilder()
                    .setDescription("<a:alert:993913485404680303> Sorry, this command is under repair, please be patient, this will take a few hours.")
                    .setColor('Red');
                    interaction.reply({ embeds: [embed], ephemeral: true })
                }
            }
            command.run(interaction, client)
        } catch (error) {
            interaction.reply({ content: `This command did not work and gave this error: \`${error}\``, ephemeral: true})
        } 
    } else if (interaction.isAutocomplete()) {
        const command = client.commands.get(interaction.commandName)
        if (!command) {
          interaction.reply({ content: `No command matching ${interaction.commandName} was found.`, ephemeral: true})
        }
        try {
          command.autocomplete(interaction, client)
        } catch (error) {
            interaction.reply({ content: `This command did not work and gave this error: \`${error}\``, ephemeral: true})
        }
    } 
}