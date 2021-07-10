// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
import { MUDGame } from './entities/game';
import { MUDGameConfig } from './mudjs.interfaces';

export class MUD {
    public static MUDConfig: MUDGameConfig
    public static MUDGame: MUDGame

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
|        by Caleb Eno ©${new Date().getFullYear()}          |
|____________________________________|
`;
        if (!config.disableTitleCard) {
            // tslint:disable-next-line
            console.log(titleCard);
        }
    }
}
