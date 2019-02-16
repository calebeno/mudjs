// import uuid from 'uuid'
// import { v4 as uuid } from 'uuid';

// @ts-ignore
// import uuid = require('uuid');
import uuid from 'uuid';

export function createShellRoom(x: number, y: number): MUDRoom {
    const roomID = uuid.v4();
    const info = {
        roomID,
        title: `Room at ${x}x${y}`,
        description: `Room Description at ${x}x${y}`
    };

    function getRoomInfo(): MUDRoomInfo {
        return info;
    }

    return {
        info: getRoomInfo
    };
}

export interface MUDRoomConfig {
    roomStyle: MUDRoomStyle;
}

export interface MUDRoomInfo {
    roomID: string;
    title: string;
    description: string;
}

export interface MUDRoom {
    readonly info: () => MUDRoomInfo;
}

export enum MUDRoomStyle {
    directional = 'directional',
    single = 'single'
}
