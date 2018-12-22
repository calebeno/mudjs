import { createRoom, RoomStyle } from './room/room';

export function initializeMUDjs(config: MUDMasterConfig): MUDMaster {
    const title = `
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
        console.log(title);
    }
    return {
        config,
        createRoom
    };
}

export interface MUDMasterConfig {
    disableTitleCard?: boolean
    roomStyle?: RoomStyle
}

export interface MUDMaster {
    config: MUDMasterConfig
    createRoom: any
}
