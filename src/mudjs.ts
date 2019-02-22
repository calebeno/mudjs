// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
import { MUDGame, MUDGameConfig } from './game/game'

export default class MUD {
    constructor(config: MUDGameConfig) {
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
            console.log(titleCard)
        }
    }
    buildGame(config: MUDGameConfig): MUDGame {
        return new MUDGame(config)
    }
}
