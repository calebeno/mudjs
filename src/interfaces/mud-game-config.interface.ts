import { MUDRoomStyle } from "../room/room";

export interface MUDGameConfig {
    disableTitleCard?: boolean
    roomConfig: {
        roomType: MUDRoomStyle
    }
}
