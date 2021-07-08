import { mudMessage, MUDMessagePriority } from "../utility/mud-messenger";
import { MUDRoom } from '../room/room'

const uuid = require('uuid') // eslint-disable-line @typescript-eslint/no-var-requires

export class MUDLevel {
    private _levelName: string;
    private _levelID: string;
    private _rooms: MUDRoom[][];

    get info(): MUDLevelInfo {
        const sizeY = this._rooms.length;
        const sizeX = this._rooms[0].length;
        return {
            levelID: this._levelID,
            size: { x: sizeX, y: sizeY }
        };
    }

    get rooms(): MUDRoom[][] {
        return this._rooms;
    }

    get roomCount(): number {
        return this._rooms.reduce((total, current) => {
            return total + current.length;
        }, 0)
    }

    get levelWidth(): number {
        return this._rooms.length;
    }

    get levelHeight(): number {
        return this._rooms[0].length;
    }

    constructor(name: string, width: number, height: number) {
        this._levelName = name;
        this._levelID = uuid.v4();
        this._rooms = Array(width)
            .fill(0)
            .map((_val, x) => {
                return Array(height)
                    .fill(0)
                    .map((_v, y) => new MUDRoom(x + 1, y + 1));
            });
    }

    getRoomByCoordinates(x: number, y: number): MUDRoom | null {
        if (this._rooms[x - 1] && this._rooms[x - 1][y - 1]) {
            return this._rooms[x - 1][y - 1];
        }
        mudMessage(MUDMessagePriority.warning, `No Room found on level ${this._levelID} at coordinates x: ${x}, y: ${y}`);
        return null;
    }

    getRoomByID(id: string): MUDRoom | null {
        let found = null
        this._rooms.some((row: MUDRoom[]) => {
            found = row.find((room: MUDRoom) => room.info.roomID === id)
            return Boolean(found)
        })

        if (found) {
            return found
        }
        mudMessage(MUDMessagePriority.warning, `No Room found on level ${this._levelID} with id: ${id}`)
        return null
    }
}

export interface MUDLevelInfo {
    levelID: string
    size: { x: number; y: number }
}
