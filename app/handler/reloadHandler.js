import config from '../../config.js';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord.js';
import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import { setTimeout } from 'timers/promises';
const wait = setTimeout;

export async function ReloadHandler(spinnies) {
    await wait(1000)
    spinnies.add('3', { text: 'Haciendo una peticion a DiscordAPI..' });
    await wait(2000)
    const commands = [];
    const commandDirectories = await fs.readdir(join(__dirname, '..', 'commands'));
  
    for (const dir of commandDirectories) {
      const commandFiles = await fs.readdir(join(__dirname, '..', 'commands', dir))
      for (const cmd of commandFiles) {
        if (cmd.endsWith('.js')) {
          try {
            const commandModule = await import(`../commands/${dir}/${cmd}`);
            commands.push(commandModule.default);
            spinnies.add('3', { text: `${commandModule.default}` });
          } catch (error) {
            spinnies.fail('3', { text: `404: No se mandaron los comandos:\n${error}` });
          }
        }
      }
    }
  
    const rest = new REST({ version: '10' }).setToken(config.token);
  
    try {
      await rest.put(Routes.applicationCommands(config.id), {
        body: [...commands],
      });
      //console.log('Comandos registrados exitosamente en la API!');
      spinnies.succeed('3', { text: `Comandos enviados, ahora pueden ser usados en discord.` });
    } catch (error) {
      spinnies.fail('3', { text: `Error al registrar los comandos:\n${error}`})
    }
  }