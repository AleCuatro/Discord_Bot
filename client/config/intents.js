import { GatewayIntentBits } from 'discord.js';

export const intents = [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildBans,
  GatewayIntentBits.GuildEmojisAndStickers,
  GatewayIntentBits.GuildIntegrations,
  GatewayIntentBits.GuildInvites,
  GatewayIntentBits.GuildMembers,
  GatewayIntentBits.GuildMessageReactions,
  GatewayIntentBits.GuildMessageTyping,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.GuildScheduledEvents,
  //GatewayIntentBits.GuildPresences, //Verifica si tu bot usa los Old and New Presence.
  GatewayIntentBits.GuildVoiceStates,
  //GatewayIntentBits.MessageContent, //Verfica si tu bot usa los msg.content
  GatewayIntentBits.GuildWebhooks,
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.DirectMessageTyping,
  GatewayIntentBits.DirectMessageReactions,
];