import { MUDLevel } from './level';
import { mudMessage, MUDMessagePriority } from '../utility/mud-messenger';
import { MUDStatDefinition } from './stat-definition';
import { cloneDeep } from 'lodash';
import { MUDPlayer } from './player';

export class MUDGame {
    // TODO:  Move these into separate "managers"
    // TODO:  Observables?

    // Stat Accessors
    private _statDefinitions: MUDStatDefinition[] = [];

    public registerStatDefinition(statDefinition: MUDStatDefinition): void {
        const alreadyRegistered = this._statDefinitions.some(statDef => statDef.statID === statDefinition.statID);
        if (alreadyRegistered) {
            mudMessage(MUDMessagePriority.warning, `Stat Definition with ID ${statDefinition.statID} already registered`);
        } else {
            this._statDefinitions.push(statDefinition);
        }
    }

    public getStatDefinitions(): MUDStatDefinition[] {
        // return cloneDeep(this._statDefinitions); // Should this stay clone deep here?  Don't really want to pass ref and potentially break things but....
        return this._statDefinitions;
    }

    public getStatDefinitionByID(statDefinitionID: string): MUDStatDefinition {
        return this._statDefinitions.find(def => def.statID === statDefinitionID);
    }

    public editStatDefinitionByID(statDefinitionID: string, edits: { displayName?: string; minValue?: number; maxValue?: number }): MUDStatDefinition | null {
        let stat = this.getStatDefinitionByID(statDefinitionID);
        if (stat) {
            stat = { ...stat, ...edits };
            return stat;
        } else {
            mudMessage(MUDMessagePriority.warning, `No stat definition found that matches ID ${statDefinitionID}`);
            return null;
        }
    }

    // Level Accessors
    private _levels: MUDLevel[] = [];

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

    // Player Accessors
    private _players: MUDPlayer[] = [];

    public registerPlayer(player: MUDPlayer): void {
        const alreadyRegistered = this._players.some(p => p.playerID === player.playerID);
        if (alreadyRegistered) {
            mudMessage(MUDMessagePriority.warning, `Player with ID ${player.playerID} already registered`);
        } else {
            this._players.push(player);
        }
    }

    public getPlayers(): MUDPlayer[] {
        // return cloneDeep(this._players); // Should this stay clone deep here?  Don't really want to pass ref and potentially break things but....
        return this._players;
    }

    public getPlayerByID(playerID: string): MUDPlayer {
        return this._players.find(player => player.playerID === playerID);
    }
}
