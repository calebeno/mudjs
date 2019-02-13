import { MUDBuildGame, MUDGame, MUDGameConfig } from './game/game';

export function initializeNewMUDjs(config: MUDGameConfig): MUDGame {
    const titleCard = `
Initializing...
 ____________________________________
|    _____ _____ ____     __ _____   |
|   |     |  |  |    \\ __|  |   __|  |
|   | | | |  |  |  |  |  |  |__   |  |
|   |_|_|_|_____|____/|_____|_____|  |
|        ADVENTURE IF YOU DARE!      |
| An API For Building MUD-like Games |
|             by Caleb Eno           |
|____________________________________|
`;
    if (!config.disableTitleCard) {
        // tslint:disable-next-line
        console.log(titleCard);
    }
    return MUDBuildGame(config);
}
