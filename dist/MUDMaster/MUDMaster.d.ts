import { MUDRoom } from '../MUDRoom/MUDRoom';
export declare class MUDMaster {
    private config;
    constructor(config: MUDMasterConfig);
    generateRoom(): MUDRoom;
}
export interface MUDMasterConfig {
    disableTitleCard?: boolean;
    roomStyle?: RoomStyle;
}
export declare enum RoomStyle {
    directional = "directional",
    single = "single"
}
