import { EmbedBuilder } from 'discord.js';
export default {
	name: 'ping',
	description: 'Get bot speed',
	run: async (interaction, client) => {
		await interaction.reply('🏓 Pong!');
		const msg = await interaction.fetchReply();
		const ms = Math.floor(msg.createdTimestamp - interaction.createdTimestamp);
		if(ms <= 60) {
			const embed = new EmbedBuilder()
			.setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
			.setColor('Random')
			.setTimestamp()
			.setDescription(
				`<:signal:1080495791736627210> ${ms}ms\n<:wifirouter:1080496162097864764> ${
					client.ws.ping
				}ms`,
			);
		interaction.editReply({ embeds: [embed], content: `<@${interaction.user.id}>` });
		} 
		if(ms >= 120) {
				const embed = new EmbedBuilder()
				.setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
				.setColor('Random')
				.setTimestamp()
				.setDescription(
					`<:mediumsignal:1080495792621633548> ${ms}ms\n<:wifirouter:1080496162097864764> ${
						client.ws.ping
					}ms`,
				);
			interaction.editReply({ embeds: [embed], content: `<@${interaction.user.id}>` }); 
		}
		if(ms >= 200) {
			const embed = new EmbedBuilder()
			.setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
			.setColor('Random')
			.setTimestamp()
			.setDescription(
				`<:lowconnection:1080495795834466388> ${ms}ms\n<:wifirouter:1080496162097864764> ${
					client.ws.ping
				}ms`,
			);
		interaction.editReply({ embeds: [embed], content: `<@${interaction.user.id}>` }); 
	}
	},
};