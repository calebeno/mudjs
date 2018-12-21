"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var MUDRoom = /** @class */ (function () {
    function MUDRoom(config) {
        this.config = config;
        this.roomID = uuid_1.v4();
        console.log(this.roomID);
    }
    return MUDRoom;
}());
exports.MUDRoom = MUDRoom;
var MUDRoomConfig = /** @class */ (function () {
    function MUDRoomConfig() {
    }
    return MUDRoomConfig;
}());
exports.MUDRoomConfig = MUDRoomConfig;
//# sourceMappingURL=MUDRoom.js.map