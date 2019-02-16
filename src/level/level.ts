import uuid from 'uuid'
import { handleError } from '../error-handler/error-handler'
import { MUDGameConfig } from '../game/game'
import { createShellRoom, MUDRoom } from '../room/room'

export function MUDcreateLevel(config: MUDGameConfig, levels: MUDLevel[], sizeX: number, sizeY: number): MUDLevel {
    const levelID = uuid.v4()
    if (config.disableTitleCard) {
        /// do nothing
    }

    const rooms: MUDRoom[][] = Array(sizeX)
        .fill(0)
        .map((_val, x) => {
            return Array(sizeY)
                .fill(0)
                .map((_v, y) => createShellRoom(x, y))
        })

    function getInfo(): MUDLevelInfo {
        return {
            levelID,
            size: { x: sizeX, y: sizeY }
        }
    }

    function getRooms(): MUDRoom[][] {
        return rooms
    }

    function getRoomByCoordinates(x: number, y: number): MUDRoom | null {
        if (rooms[x] && rooms[x][y]) {
            return rooms[x][y]
        }
        handleError(`No Room found on level ${levelID} at coordinates x: ${x}, y: ${y}`)
        return null
    }

    function getRoomByID(id: string): MUDRoom | null {
        let room: MUDRoom | undefined

        for (const row of rooms) {
            for (const r of row) {
                if (r.info().roomID === id) {
                    room = r
                    break
                }
            }
            if (room) {
                break
            }
        }
        if (room) {
            return room
        }
        handleError(`No Room found on level ${levelID} with id: ${id}`)
        return null
    }

    const newLevel: MUDLevel = {
        info: getInfo,
        rooms: getRooms,
        roomByCoordinates: getRoomByCoordinates,
        roomByID: getRoomByID
    }

    levels.push(newLevel)

    return newLevel
}

export interface MUDLevelInfo {
    levelID: string
    size: { x: number; y: number }
}

export interface MUDLevel {
    readonly info: () => MUDLevelInfo
    readonly rooms: () => MUDRoom[][]
    readonly roomByCoordinates: (x: number, y: number) => MUDRoom | null
    readonly roomByID: (id: string) => MUDRoom | null
}
