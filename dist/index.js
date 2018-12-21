"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MUDMaster_1 = require("./MUDMaster/MUDMaster");
function initializeMUDjs(config) {
    var master = new MUDMaster_1.MUDMaster(config);
    var title = "\nInitializing...\n ____________________________________\n|    _____ _____ ____     __ _____   |\n|   |     |  |  |    \\ __|  |   __|  |\n|   | | | |  |  |  |  |  |  |__   |  |\n|   |_|_|_|_____|____/|_____|_____|  |\n|        ADVENTURE IF YOU DARE!      |\n| An API For Building MUD-like Games |\n|             by Caleb Eno           |\n|____________________________________|\n";
    if (!config.disableTitleCard) {
        console.log(title);
    }
    master.generateRoom();
    return master;
}
exports.initializeMUDjs = initializeMUDjs;
initializeMUDjs({});
//# sourceMappingURL=index.js.map