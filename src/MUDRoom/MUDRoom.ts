import { v4 as uuid } from 'uuid';

export class MUDRoom {

    roomID: string;

    constructor(private config: MUDRoomConfig) {
        this.roomID = uuid();
        console.log(this.roomID);
    }
}

export class MUDRoomConfig {

}
