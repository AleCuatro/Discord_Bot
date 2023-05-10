import config from '../config.js';

export default async function postDiscords(guildCount) {
  if (config.inProduction) {
        const url = `https://discords.com/bots/api/bot/${process.env.discordID}`;
        const data = {
            server_count: guildCount,
        };
        const options = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            Authorization: process.env.discordsBotsToken,
            },
            body: JSON.stringify(data),
        };
        const response = await fetch(url, options);
        const result = await response.json();

        if (response.status === 200) console.log(`success published in discords.com ${result.message}`);
        else if (response.status === 404) console.log(`error published in discords.com ${result.message}`);
        else console.log(`error unknown in discords.com ${result.message}`);
        } else {
        console.log('test mode: discordBots module already disabled.');
    } 
}
