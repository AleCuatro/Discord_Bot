import BaseAmayo from "./BaseClient.js";
import Topgg from "@top-gg/sdk";
import Spinnies from "spinnies";
const spinnies = new Spinnies()
import { setTimeout } from 'timers/promises';
const wait = setTimeout;

class Amayo extends BaseAmayo {
    constructor(client){
        super(client)
        client.topgg = new Topgg.Api(process.env.topGG, this);
        process.on('unhandledRejection', (error) => {
            spinnies.add('4', { text: 'Error procesado: ' });
            wait(4000)
            console.log('An error was not caught')
            if (error instanceof Error) {
                console.log(`${error.name}`);
                console.log(`${error}`);
            }
        })
    }
}

export default Amayo;