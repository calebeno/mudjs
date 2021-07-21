import { MUDStatModSerialized } from '../entities/stat-mod';

// When modifying these interfaces, make sure you run "npm run build:serializedJsonSchema" to regenerate the json schema for save/load files.

export interface MUDGameSerialized {
    _players: MUDPlayerSerialized[],
    _statDefinitions: MUDStatDefinitionSerialized[]
}

export interface MUDPlayerSerialized {
    playerID: string;
    playerName: string;
    stats: MUDStatSerialized[];
}

export interface MUDStatSerialized {
    _statDefinitionID: string;
    _baseValue: number;
    _mods: MUDStatModSerialized[];
}

export interface MUDStatDefinitionSerialized {
    statID: string;
    displayName: string;
    minValue: number;
    maxValue: number;
}
