"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MUDRoom_1 = require("../MUDRoom/MUDRoom");
var MUDMaster = /** @class */ (function () {
    function MUDMaster(config) {
        this.config = config;
    }
    MUDMaster.prototype.generateRoom = function () {
        return new MUDRoom_1.MUDRoom({});
    };
    return MUDMaster;
}());
exports.MUDMaster = MUDMaster;
var RoomStyle;
(function (RoomStyle) {
    RoomStyle["directional"] = "directional";
    RoomStyle["single"] = "single";
})(RoomStyle = exports.RoomStyle || (exports.RoomStyle = {}));
//# sourceMappingURL=MUDMaster.js.map