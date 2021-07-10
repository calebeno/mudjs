import { v4 } from 'uuid';
import { MUDStat } from './stat';

export class Player {
    public playerID: string
    public name: string

    public stats: MUDStat[] = []

    constructor(name: string) {
        this.playerID = v4();
        this.name = name;
    }

    public AddStat(name: string, startingValue: number): void {
        this.stats.push(new MUDStat(name, startingValue));
    }
}
