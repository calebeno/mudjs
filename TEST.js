// let createRoom = require('./src/lib/room/room.js');

let test = require('./build/main/index.js');

let mud = test.initializeNewMUDjs({});
console.log(mud.config());
console.log(mud.createLevel(2, 2));
console.log(mud.level(0).info());
console.log(mud.level(0).rooms());
console.log('---------');
console.log(mud.level(0).roomByCoordinates(0, 0).info());

