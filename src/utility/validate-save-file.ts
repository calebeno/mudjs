import Ajv from 'ajv';
import * as serializedMUDGameJsonSchema from '../interfaces/serialized-MUDGame.schema.json';
import { MUDGameSerialized } from '../interfaces/serialized.interfaces';
import { mudMessage, MUDMessagePriority } from './mud-messenger';

export function ValidateSaveFile(serializedSaveFile: MUDGameSerialized): boolean {

    if (!ValidateSaveFileJsonStructure(serializedSaveFile)) {
        return false;
    }

    if (!VerifyAllPlayerStatDefinitionIDsExist(serializedSaveFile)) {
        return false;
    }

    return true;
}

function ValidateSaveFileJsonStructure(serializedSaveFile: MUDGameSerialized): boolean {
    const ajv = new Ajv();
    const validate = ajv.compile(serializedMUDGameJsonSchema);

    const valid = validate(serializedSaveFile);
    if (!valid) {
        mudMessage(MUDMessagePriority.error, 'Saved Game Build Failed Validation, see output below.');
        console.log(validate.errors);
    }
    return valid;
}

function VerifyAllPlayerStatDefinitionIDsExist(serializedSaveFile: MUDGameSerialized): boolean {
    return !serializedSaveFile._players.find((player) => {
        return player.stats.find((stat) => {
            const matchFound = serializedSaveFile._statDefinitions.find((statDef) => statDef.statID == stat._statDefinitionID);
            if (!matchFound) {
                mudMessage(MUDMessagePriority.error, `Saved Game Build Failed Validation, no corresponding Stat Definition with ID "${stat._statDefinitionID}" found on Player "${player.playerName}"`);
                return true;
            }
            return false;
        });
    });
}
