// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
import { MUDGame } from './entities/game';
import { MUDGameConfig } from './interfaces/entity.interfaces';
import { MUDGameSerialized } from './interfaces/serialized.interfaces';
import { ValidateSaveFile } from './utility/validate-save-file';

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

    public static SaveGame(game: MUDGame): MUDGameSerialized {
        console.log(MUDGame.Serialize(game));
        return MUDGame.Serialize(game);
    }

    public static LoadGame(savedGame: MUDGameSerialized): void {
        ValidateSaveFile(savedGame);
        MUD.MUDGame = MUDGame.Deserialize(savedGame);
    }
}
