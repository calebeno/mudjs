import { MUDLevel } from './level';
import { mudMessage, MUDMessagePriority } from '../utility/mud-messenger';
import { cloneDeep } from 'lodash';
import { MUDPlayer } from './player';
import { MUDStatDefinitionAccessors } from "../accessors/stat-definition.acc";
import { staticImplements } from "../utility/class-decorators";
import { Serializable } from "../interfaces/entity.interfaces";
import { MUDStatDefinition } from "./stat-definition";
import { MUDPlayerAccessors } from "../accessors/player.acc";
import { MUDGameSerialized } from "../interfaces/serialized.interfaces";

@staticImplements<Serializable<MUDGame, MUDGameSerialized>>()
export class MUDGame {
    // TODO:  Move these into separate "managers"
    // TODO:  Observables?

    public StatDefinitions: MUDStatDefinitionAccessors = new MUDStatDefinitionAccessors();
    public Players: MUDPlayerAccessors = new MUDPlayerAccessors();

    // private _ResetObjects() {
    //     this.StatDefinitions = new MUDStatDefinitionAccessors();
    //     this.Players = new MUDPlayerAccessors();
    // }

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

    public static Serialize(game: MUDGame): MUDGameSerialized {
        return {
            _players: game.Players.getPlayers().map((player) => MUDPlayer.Serialize(player)),
            _statDefinitions: game.StatDefinitions.getStatDefinitions().map((statDef) => MUDStatDefinition.Serialize(statDef))
        };
    }

    public static Deserialize(serializedGame: MUDGameSerialized): MUDGame {
        const game = new MUDGame();

        // Set Stat Definitions
        game.StatDefinitions['_statDefinitions'] = serializedGame._statDefinitions.map((s_statDef) => {
            return MUDStatDefinition.Deserialize(s_statDef);
        });

        // SetPlayers
        game.Players['_players'] = serializedGame._players.map((sPlayer) => MUDPlayer.Deserialize(sPlayer));

        return game;
    }
}
