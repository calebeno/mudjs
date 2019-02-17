const MUD = require('./dist/mudjs.umd');
const mud = new MUD({});

const game = mud.buildGame({});
console.log(game);
const level = game.createLevel(10, 10);
console.log(level);
console.log(level.roomByCoordinates(0, 0).info());
