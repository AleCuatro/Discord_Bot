import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import { setTimeout } from 'timers/promises';
const wait = setTimeout;

import { readdirSync } from 'fs';
export default async function loadCommands(client) {
    try {
        readdirSync("./app/commands/").map(async dir => {
            readdirSync(`./app/commands/${dir}/`).map(async cmd=> {
                let pull = await import(`../commands/${dir}/${cmd}`);
                try {
                    console.log(`${dir}/${cmd} empaquetado correctamente`)
                    client.commands.set(pull.default.name, pull.default);   
                } catch (error) {
                    console.log(`${dir}/${cmd} fue cancelado, su error:`);
                    console.log(`${error}`)
                }
            })
        })   
    } catch (error) {
        console.log('La carpeta "commands" no existe o esta mal nombrada!');
    }
};