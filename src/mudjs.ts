// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
import { MUDGame } from './game/game'
import { MUDGameConfig } from "./interfaces/mud-game-config.interface";

export default class MUD {
    public static MUDConfig: MUDGameConfig;
    public static MUDGame: MUDGame;

    constructor(config: MUDGameConfig) {
        MUD.MUDConfig = config;
        MUD.MUDGame = new MUDGame();

        const titleCard = `
 ____________________________________
|    _____ _____ ____     __ _____   |
|   |     |  |  |    \\ __|  |   __|  |
|   | | | |  |  |  |  |  |  |__   |  |
|   |_|_|_|_____|____/|_____|_____|  |
|        ADVENTURE IF YOU DARE!      |
| An API For Building MUD-like Games |
|             by Caleb Eno           |
|____________________________________|
`
        if (!config.disableTitleCard) {
            // tslint:disable-next-line
            console.log(titleCard);
        }
    }
}
