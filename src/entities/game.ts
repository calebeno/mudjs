import { MUDLevel } from './level';
import { mudMessage, MUDMessagePriority } from '../utility/mud-messenger';

// export * from './level';
// export * from './room';

export class MUDGame {
    private _levels: MUDLevel[] = []

    get levelCount(): number {
        return this._levels.length;
    }

    createLevel(name: string, width: number, height: number): MUDLevel {
        const level = new MUDLevel(name, width, height);
        this._levels.push(level);
        return level;
    }

    getLevel(id: number | string): MUDLevel | null {
        if (typeof id === 'number') {
            if (this._levels[id]) {
                return this._levels[id];
            } else {
                mudMessage(MUDMessagePriority.error, `Level not found with index ${id}`);
                return null;
            }
        }

        if (typeof id === 'string') {
            const levelMatch = this._levels.find(level => level.info.levelID === id);
            if (levelMatch) {
                return levelMatch;
            } else {
                mudMessage(MUDMessagePriority.error, `Level  not found with identifier ${id}`);
                return null;
            }
        }
        mudMessage(MUDMessagePriority.error, 'No valid room identifier provided');
        return null;
    }
}
