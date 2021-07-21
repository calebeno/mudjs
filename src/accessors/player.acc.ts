import { MUDPlayer } from "../entities/player";
import { mudMessage, MUDMessagePriority } from "../utility/mud-messenger";

export class MUDPlayerAccessors {

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
        return this._players;
    }

    public getPlayerByID(playerID: string): MUDPlayer {
        return this._players.find(player => player.playerID === playerID);
    }
}
