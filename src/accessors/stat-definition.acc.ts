import { MUDStatDefinition } from "../entities/stat-definition";
import { mudMessage, MUDMessagePriority } from "../utility/mud-messenger";

export class MUDStatDefinitionAccessors {

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
        return this._statDefinitions;
    }

    public getStatDefinitionByID(statDefinitionID: string): MUDStatDefinition {
        return this._statDefinitions.find(def => def.statID === statDefinitionID);
    }

    public editStatDefinitionByID(statDefinitionID: string, edits: { displayName: string; minValue: number; maxValue: number }): MUDStatDefinition | null {
        const stat = this.getStatDefinitionByID(statDefinitionID);
        console.log(stat);
        if (stat) {
            stat.displayName = edits.displayName;
            stat.minValue = edits.minValue;
            stat.maxValue = edits.maxValue;
            console.log(stat);
            return stat;
        } else {
            mudMessage(MUDMessagePriority.warning, `No stat definition found that matches ID ${statDefinitionID}, cannot edit.`);
            return null;
        }
    }

    public deleteStatDefinitionByID(statDefinitionID: string): void {
        const stat = this.getStatDefinitionByID(statDefinitionID);
        const index = this._statDefinitions.indexOf(stat);
        if (index > -1) {
            this._statDefinitions.splice(index, 1);
        } else {
            mudMessage(MUDMessagePriority.warning, `No stat definition found that matches ID ${statDefinitionID}, cannot delete`);
            return null;
        }
    }
}
