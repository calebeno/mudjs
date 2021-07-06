// eslint-disable-next-line @typescript-eslint/no-var-requires
const uuid = require('uuid')

export class MUDRoom {
    get info() {
        return {
            id: this._roomID,
            title: `Room at ${this._xCoordinate}x${this._yCoordinate}`,
            description: `Room Description at ${this._xCoordinate}x${this._yCoordinate}`
        }
    }

    private _roomID: string
    private _xCoordinate: number
    private _yCoordinate: number

    constructor(private x: number, private y: number) {
        this._roomID = uuid.v4()
        this._xCoordinate = x
        this._yCoordinate = y
    }
}

export interface MUDRoomConfig {
    roomStyle: MUDRoomStyle
}

export interface MUDRoomInfo {
    roomID: string
    title: string
    description: string
}

export enum MUDRoomStyle {
    directional = 'directional',
    single = 'single'
}
