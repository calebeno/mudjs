// eslint-disable-next-line @typescript-eslint/no-var-requires
const uuid = require('uuid')

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
        }
    }

    constructor(x: number, y: number) {
        this._roomID = uuid.v4()
        this._xCoordinate = x
        this._yCoordinate = y
    }
}

export interface MUDRoomInfo {
    roomID: string;
    title: string;
    coordinates: string;
    description: string;
}

export enum MUDRoomStyle {
    directional = 'directional',
    single = 'single'
}
