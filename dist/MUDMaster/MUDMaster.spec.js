"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MUDMaster_1 = require("./MUDMaster");
test('first', function () {
    var config = {
        disableTitleCard: false
    };
    var master = new MUDMaster_1.MUDMaster(config);
    expect(master['config']).toBe(config);
});
//# sourceMappingURL=MUDMaster.spec.js.map