import Discord from "discord.js";
import Spinnies from "spinnies";
const spinnies = new Spinnies()
import { setTimeout } from 'timers/promises';
const wait = setTimeout;

class BaseAmayo extends Discord.Client {
    constructor(options){
        super(options);
        options.partials = options.partials || [
            Discord.Partials.GuildMember,
            Discord.Partials.Channel,
            Discord.Partials.Message,
            Discord.Partials.Reaction,
            Discord.Partials.User,
            Discord.Partials.GuildScheduledEvent,
            Discord.Partials.ThreadMember,
        ];
        try {
            this.token = options.token
            this.login(this.token);
            wait(5000)
             console.log('El cliente esta en operacion.');
        } catch (error) {
            console.log('El cliente está en operación.');
        }
    }
}


export default BaseAmayo;