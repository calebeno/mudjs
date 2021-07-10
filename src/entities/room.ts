import { v4 } from 'uuid';
import { MUDRoomInfo } from '../mudjs.interfaces';

export class MUDRoom {
    private _roomID: string
    private _xCoordinate: number
    private _yCoordinate: number

    get info(): MUDRoomInfo {
        return {
            roomID: this._roomID,
            title: `Room at ${this._xCoordinate}x${this._yCoordinate}`,
            coordinates: `${this._xCoordinate}x${this._yCoordinate}`,
            description: `Room Description at ${this._xCoordinate}x${this._yCoordinate}`
        };
    }

    constructor(x: number, y: number) {
        this._roomID = v4();
        this._xCoordinate = x;
        this._yCoordinate = y;
    }
}
