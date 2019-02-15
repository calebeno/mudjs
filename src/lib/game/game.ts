import { handleError } from '../error-handler/error-handler';
import { MUDcreateLevel, MUDLevel } from '../level/level';
import { MUDRoomConfig } from '../room/room';

export function MUDBuildGame(config: MUDGameConfig): MUDGame {
    const levels: MUDLevel[] = [];

    function getConfig(): MUDGameConfig {
        return config;
    }

    function getLevels(): MUDLevel[] {
        return levels;
    }

    function getLevel(id: number | string): MUDLevel {
        if (typeof id === 'number') {
            if (levels[id]) {
                return levels[id];
            } else {
                handleError(`Room not found with index ${id}`);
                return null;
            }
        }

        if (typeof id === 'string') {
            const levelMatch = levels.find(level => level.info().levelID === id);
            if (levelMatch) {
                return levelMatch;
            } else {
                // tslint:disable-next-line
                handleError(`Room not found with identifier ${id}`);
                return null;
            }
        }
        handleError('No valid room identifier provided');
        return null;
    }

    function createLevelWrapper(x: number, y: number): MUDLevel {
        return MUDcreateLevel(config, levels, x, y);
    }

    return {
        config: getConfig,
        levels: getLevels,
        level: getLevel,
        createLevel: createLevelWrapper
    };
}

export interface MUDGameConfig {
    disableTitleCard?: boolean
    roomConfig: MUDRoomConfig
}

export interface MUDGame {
    readonly config: () => MUDGameConfig;
    readonly levels: () => MUDLevel[],
    readonly level: (id: number | string) => MUDLevel;
    readonly createLevel: (x: number, y: number) => MUDLevel
}
