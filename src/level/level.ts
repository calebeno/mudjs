import { v4 as uuidv4 } from 'uuid';
import { handleError } from '../error-handler/error-handler'
import { MUDGameConfig } from '../game/game'
import { MUDRoom } from '../room/room'

export class MUDLevel {
    get info(): MUDLevelInfo {
        const sizeY = this._rooms.length
        const sizeX = this._rooms[0].length
        return {
            levelID: this._levelID,
            size: { x: sizeX, y: sizeY }
        }
    }

    get rooms(): MUDRoom[][] {
        return this._rooms
    }

    private _levelID: string
    private _rooms: MUDRoom[][]

    constructor(private config: MUDGameConfig, sizeX: number, sizeY: number) {
        this._levelID = uuidv4()
        this._rooms = Array(sizeX)
            .fill(0)
            .map((_val, x) => {
                return Array(sizeY)
                    .fill(0)
                    .map((_v, y) => new MUDRoom(x, y))
            })
    }

    getRoomByCoordinates(x: number, y: number): MUDRoom | null {
        if (this._rooms[x] && this._rooms[x][y]) {
            return this._rooms[x][y]
        }
        handleError(`No Room found on level ${this._levelID} at coordinates x: ${x}, y: ${y}`)
        return null
    }

    getRoomByID(id: string): MUDRoom | null {
        let found = null
        this._rooms.some((row: MUDRoom[]) => {
            found = row.find((room: MUDRoom) => room.info.id === id)
            return Boolean(found)
        })

        if (found) {
            return found
        }
        handleError(`No Room found on level ${this._levelID} with id: ${id}`)
        return null
    }
}

export interface MUDLevelInfo {
    levelID: string
    size: { x: number; y: number }
}
