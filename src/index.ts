import { MUDMaster, MUDMasterConfig } from './MUDMaster/MUDMaster';

export function initializeMUDjs(config: MUDMasterConfig): MUDMaster {
    let master = new MUDMaster(config);
    let title = `
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
        console.log(title);
    }
    master.generateRoom();
    return master;
}
initializeMUDjs({});
