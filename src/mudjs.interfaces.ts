import { MUDRoomStyle } from './mudjs.enums';

export interface MUDLevelInfo {
    levelID: string
    size: { x: number; y: number }
}

export interface MUDGameConfig {
    disableTitleCard?: boolean
    roomConfig: {
        roomType: MUDRoomStyle
    }
}

export interface MUDRoomInfo {
    roomID: string
    title: string
    coordinates: string
    description: string
}
