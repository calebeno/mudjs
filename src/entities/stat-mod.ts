import { Serializable } from '../interfaces/entity.interfaces';
import { staticImplements } from '../utility/class-decorators';

@staticImplements<Serializable<MUDStatMod, MUDStatModSerialized>>()
export class MUDStatMod {
    public value: number;
    public type: MUDStatModType;
    public phase: MUDStatModPhase;

    constructor(value: number, type: MUDStatModType, phase: MUDStatModPhase = MUDStatModPhase.normal) {
        this.value = value;
        this.type = type;
        this.phase = phase;
    }

    public static Serialize(object: MUDStatMod): MUDStatModSerialized {
        return {
            phase: object.phase,
            type: object.type,
            value: object.value
        };
    }

    public static Deserialize(value: MUDStatModSerialized): MUDStatMod {
        return new MUDStatMod(value.value, value.type, value.phase);
    }
}

export interface MUDStatModSerialized {
    phase: MUDStatModPhase;
    type: MUDStatModType;
    value: number;
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
