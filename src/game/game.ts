import { handleError } from '../error-handler/error-handler'
import { MUDLevel } from '../level/level'
import { MUDRoomConfig } from '../room/room'

export * from '../level/level'
export * from '../room/room'

export class MUDGame {
    get config(): MUDGameConfig {
        return this._config
    }

    get levels(): MUDLevel[] {
        return this._levels
    }

    private _levels: MUDLevel[] = []

    constructor(private _config: MUDGameConfig) {}

    getLevel(id: number | string): MUDLevel | null {
        if (typeof id === 'number') {
            if (this._levels[id]) {
                return this._levels[id]
            } else {
                handleError(`Room not found with index ${id}`)
                return null
            }
        }

        if (typeof id === 'string') {
            const levelMatch = this._levels.find(level => level.info.levelID === id)
            if (levelMatch) {
                return levelMatch
            } else {
                // tslint:disable-next-line
                handleError(`Room not found with identifier ${id}`)
                return null
            }
        }
        handleError('No valid room identifier provided')
        return null
    }

    createLevel(x: number, y: number): MUDLevel {
        const level = new MUDLevel(this.config, x, y)
        this._levels.push(level)
        return level
    }
}

export interface MUDGameConfig {
    disableTitleCard?: boolean
    roomConfig: MUDRoomConfig
}
