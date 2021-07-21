import { v4 } from 'uuid';
import { MUDStat } from './stat';
import { staticImplements } from '../utility/class-decorators';
import { Serializable } from '../interfaces/entity.interfaces';
import { MUDStatDefinition } from './stat-definition';
import { mudMessage, MUDMessagePriority } from '../utility/mud-messenger';
import { MUDPlayerSerialized } from "../interfaces/serialized.interfaces";

@staticImplements<Serializable<MUDPlayer, MUDPlayerSerialized>>()
export class MUDPlayer {
    public playerID: string;
    public playerName: string;

    public stats: MUDStat[] = [];

    constructor(name: string) {
        this.playerID = v4();
        this.playerName = name;
    }

    public AddStat(statDefinition: MUDStatDefinition, startingValue: number): void {
        this.stats.push(new MUDStat(statDefinition, startingValue));
    }

    public GetStatByID(statID: string): MUDStat | null {
        const stat = this.stats.find(stat => stat.statID === statID);
        if (stat) {
            return stat;
        } else {
            mudMessage(MUDMessagePriority.warning, `No stat found on player ${this.playerName} that matches ID ${statID}`);
            return null;
        }
    }

    public static Serialize(player: MUDPlayer): MUDPlayerSerialized {
        return {
            playerID: player.playerID,
            playerName: player.playerName,
            stats: player.stats.map(stat => MUDStat.Serialize(stat))
        };
    }

    public static Deserialize(serializedPlayer: MUDPlayerSerialized): MUDPlayer {
        const player = new MUDPlayer(serializedPlayer.playerName);
        player.stats = serializedPlayer.stats.map(stat => {
            return MUDStat.Deserialize(stat);
        });
        return player;
    }
}
