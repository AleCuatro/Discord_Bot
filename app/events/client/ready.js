import postDiscordsBots from '../../../api/discordsBots.js';
import postTopGG from '../../../api/topGG.js';
import { separator } from '../../functions/count.js';
import { randomStringActivity } from '../../functions/randomStringReady.js';
import { playerEvent } from '../../handler/player.js';

export default async function readyHandler(client) {
  const usersCount = client.guilds.cache.reduce((a, b) => a + b.memberCount, 0);
  const guildCount = client.guilds.cache.size;
  const activityRandom = [`${guildCount} servers use the bot.`, `${separator(usersCount)} users use the bot.`, `Thank you for using the bot!`, `discord.gg/amayo`];

  setInterval(() => {
    client.user.setPresence({
      afk: false,
      activities: [
        {
          name: randomStringActivity(activityRandom),
          type: 3,
        },
      ],
    });
  }, 12000);

  postDiscordsBots(guildCount);
  postTopGG(client);
  playerEvent(client);
}