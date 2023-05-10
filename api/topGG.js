import config from '../config.js';
import { AutoPoster } from 'topgg-autoposter';

const postTopGG = (client) => {
  if (config.inProduction) {
    const poster = AutoPoster(process.env.topGG, client);
    poster.on('posted', (stats) => {
      console.log(`Posted stats to Top.gg | ${stats.serverCount} servers`);
    });
  } else {
    console.log('test mode: top-gg module already disabled.');
  }
};

export default postTopGG;
