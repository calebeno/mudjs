import { MUDRoom } from '../MUDRoom/MUDRoom';

export class MUDMaster {
    constructor(private config: MUDMasterConfig) {}

    generateRoom(): MUDRoom {
        return new MUDRoom({});
    }
}

export interface MUDMasterConfig {
    disableTitleCard?: boolean,
    roomStyle?: RoomStyle
}

export enum RoomStyle {
    directional = 'directional',
    single = 'single'
}
