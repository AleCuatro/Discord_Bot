import Amayo from "./client/amayo.js";
import { intents } from './client/config/intents.js';
import * as dotenv from 'dotenv';
import { Collection } from 'discord.js';
import { loadEvents } from "./app/handler/events.js";
import { ReloadHandler } from "./app/handler/reloadHandler.js";
import { CommandHandler } from "./app/handler/commands.js";
import Spinnies from "spinnies";
const spinnies = new Spinnies()
dotenv.config()
const client = new Amayo({
    intents,
    token: process.env.clientToken,
})
client.commands = new Collection()
CommandHandler(client)
ReloadHandler(spinnies)
loadEvents(client);
export default client;