import { staticImplements } from '../utility/class-decorators';
import { Serializable } from '../interfaces/entity.interfaces';
import { v4 } from 'uuid';
import { MUDStatDefinitionSerialized } from "../interfaces/serialized.interfaces";

@staticImplements<Serializable<MUDStatDefinition, MUDStatDefinitionSerialized>>()
export class MUDStatDefinition {
    public statID: string;
    public displayName: string;
    public minValue: number;
    public maxValue: number;

    constructor(displayName: string, minValue = 0, maxValue = 100000) {
        this.statID = v4();
        this.displayName = displayName;
        this.minValue = minValue;
        this.maxValue = maxValue;
    }

    public static Serialize(object: MUDStatDefinition): MUDStatDefinitionSerialized {
        return {
            statID: object.statID,
            displayName: object.displayName,
            minValue: object.minValue,
            maxValue: object.maxValue
        };
    }

    public static Deserialize(value: MUDStatDefinitionSerialized): MUDStatDefinition {
        const statDefinition = new MUDStatDefinition(value.displayName, value.minValue, value.maxValue);
        statDefinition['statID'] = value.statID;
        return statDefinition;
    }
}
