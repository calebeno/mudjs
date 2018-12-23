// import uuid from 'uuid'
// import { v4 as uuid } from 'uuid';

// @ts-ignore
import uuid = require('uuid');

// export function createRoom(config: MUDRoomConfig): room {
export function createRoom(): Room {
    const roomID = uuid.v4();
    // tslint:disable-next-line
    console.log(roomID);
    return {
        roomID
    };
}

export interface Room {
    roomID: string;
}

export interface MUDRoomConfig {
    dummyParam: string;
}

export enum RoomStyle {
    directional = 'directional',
    single = 'single'
}
