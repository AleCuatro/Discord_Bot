import { readdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import { setTimeout } from 'timers/promises';
const wait = setTimeout;

export default async function loadEvents(client) {
  const load = (dirs) => {
    const events = readdirSync(`./app/events/${dirs}/`).filter((d) => d.endsWith("js"));
    for (let file of events) {
      import(`../events/${dirs}/${file}`).then((evt) => {
        let eName = file.split('.')[0];
         amayo.on(eName, evt.default.bind(null, client));
      })
      }
  };
  ["client", "server"].forEach((x) => load(x));
};
 