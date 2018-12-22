// let createRoom = require('./src/lib/room/room.js');

let test = require('./build/main/index.js');

let mud = test.initializeMUDjs({});
console.log(mud.config);
console.log(mud.createRoom());

