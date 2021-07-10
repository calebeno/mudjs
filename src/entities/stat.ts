import * as clamp from 'lodash.clamp';

export class MUDStat {
    public name: string

    private _baseValue: number
    private _mods: MUDStatMod[] = []

    private _minValue: number
    private _maxValue: number

    get value(): number {
        const earlyModResult = this.calcMods(MUDStatModPhase.early, this._baseValue);
        const normalModResult = this.calcMods(MUDStatModPhase.normal, earlyModResult);
        const lateModResult = this.calcMods(MUDStatModPhase.late, normalModResult);
        return clamp(lateModResult, this._minValue, this._maxValue);
    }

    constructor(name: string, baseValue: number, minValue = 0, maxValue = 100000) {
        this.name = name;
        this._baseValue = baseValue;
        this._minValue = minValue;
        this._maxValue = maxValue;
    }

    public AddModifier(value: number, type: MUDStatModType, phase: MUDStatModPhase = MUDStatModPhase.normal): void {
        this._mods.push({
            value,
            type,
            phase
        });
    }

    private calcMods(phase: MUDStatModPhase, value: number) {
        const mods = this._mods.filter(mod => mod.phase === phase);

        return mods.reduce((total: number, current) => {
            switch (current.type) {
                case MUDStatModType.add:
                    return total + current.value;
                case MUDStatModType.subtract:
                    return total - current.value;
                case MUDStatModType.multiply:
                    return total * current.value;
                case MUDStatModType.divide:
                    return total / current.value;
            }
        }, value);
    }
}

export interface MUDStatMod {
    phase: MUDStatModPhase
    type: MUDStatModType
    value: number
}

export enum MUDStatModType {
    add = 'add',
    subtract = 'sub',
    multiply = 'multiply',
    divide = 'divide'
}

export enum MUDStatModPhase {
    early = 'early',
    normal = 'normal',
    late = 'late'
}
