import { clamp } from 'lodash';
import { Serializable } from '../mudjs.interfaces';
import { MUDStatMod, MUDStatModPhase, MUDStatModSerialized, MUDStatModType } from './stat-mod';
import { staticImplements } from '../utility/class-decorators';
import { MUDStatDefinition, MUDStatDefinitionSerialized } from './stat-definition';

@staticImplements<Serializable<MUDStat, MUDStatSerialized>>()
export class MUDStat {
    private _statDefinition: MUDStatDefinition;
    private _baseValue: number;
    private _mods: MUDStatMod[] = [];

    get displayName(): string {
        return this._statDefinition.displayName;
    }

    get baseValue(): number {
        return this._baseValue;
    }

    get statID(): string {
        return this._statDefinition.statID;
    }

    get totalValue(): number {
        const earlyModResult = this.calcMods(MUDStatModPhase.early, this._baseValue);
        const normalModResult = this.calcMods(MUDStatModPhase.normal, earlyModResult);
        const lateModResult = this.calcMods(MUDStatModPhase.late, normalModResult);
        return clamp(lateModResult, this._statDefinition.minValue, this._statDefinition.maxValue);
    }

    constructor(statDefinition: MUDStatDefinition, baseValue: number) {
        this._statDefinition = statDefinition;
        this._baseValue = baseValue;
    }

    public AddToBaseValue(valueToAdd: number): number {
        return (this._baseValue += valueToAdd);
    }

    public AddModifier(value: number, type: MUDStatModType, phase: MUDStatModPhase = MUDStatModPhase.normal): void {
        this._mods.push(new MUDStatMod(value, type, phase));
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

    public static Serialize(stat: MUDStat): MUDStatSerialized {
        return {
            _statDefinition: MUDStatDefinition.Serialize(stat._statDefinition),
            _baseValue: stat._baseValue,
            _mods: stat._mods.map(mod => MUDStatMod.Serialize(mod))
        };
    }

    public static Deserialize(serializedStat: MUDStatSerialized): MUDStat {
        const statDefinition = MUDStatDefinition.Deserialize(serializedStat._statDefinition);
        const stat = new MUDStat(statDefinition, serializedStat._baseValue);
        stat._mods = serializedStat._mods.map(mod => {
            return MUDStatMod.Deserialize(mod);
        });
        return stat;
    }
}

export interface MUDStatSerialized {
    _statDefinition: MUDStatDefinitionSerialized;
    _baseValue: number;
    _mods: MUDStatModSerialized[];
}
